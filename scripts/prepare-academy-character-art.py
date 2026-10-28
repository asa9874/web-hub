"""Crop generated four-expression atlases and export small WebP runtime assets.
Only packaging/resizing: does not synthesize or repaint character art.
"""
import json
from pathlib import Path
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parent.parent
manifest = json.loads((root / 'docs/academy/character-art-prompts.json').read_text(encoding='utf-8'))
target = root / 'public/assets/academy/characters'
report = []
contact = Image.new('RGB', (1020, 5 * 220), '#202633')
draw = ImageDraw.Draw(contact)
for index, entry in enumerate(manifest['files']):
    original = Image.open(entry['source']).convert('RGBA')
    width, height = original.size
    if width / height < 1.45:
        raise ValueError(f"Expected four-column atlas: {entry['key']} {original.size}")
    folder = target / entry['key']
    folder.mkdir(parents=True, exist_ok=True)
    sizes = {}
    projection = list(original.getchannel('A').resize((width, 1), Image.Resampling.BOX).getdata())
    runs, start = [], None
    for x, value in enumerate(projection + [0]):
        if value > 3 and start is None:
            start = x
        elif value <= 3 and start is not None:
            if x-start > width*.035:
                runs.append((start, x))
            start = None
    runs = sorted(sorted(runs, key=lambda r:r[1]-r[0], reverse=True)[:4])
    if len(runs) != 4:
        raise ValueError(f"Cannot isolate four characters: {entry['key']} {runs}")
    cell_width = max(b-a for a,b in runs)+24
    cells = []
    for a,b in runs:
        middle = (a+b)/2
        cells.append(original.crop((round(middle-cell_width/2), 0, round(middle+cell_width/2), height)))
    # Consistent framing across expressions: trim the same vertical bounds.
    bounds = [c.getchannel('A').getbbox() for c in cells]
    top = min(b[1] for b in bounds if b)
    bottom = max(b[3] for b in bounds if b)
    for emotion, cell in zip(manifest['expressions'], cells):
        body = cell.crop((0, top, cell.width, bottom))
        body.thumbnail((368, 780), Image.Resampling.LANCZOS)
        canvas = Image.new('RGBA', (384, 800))
        canvas.alpha_composite(body, ((384-body.width)//2, 800-body.height-8))
        path = folder / f'{emotion}.webp'
        canvas.save(path, 'WEBP', quality=84, method=6)
        sizes[emotion] = path.stat().st_size
    cell = cells[0]
    cy = top + (bottom-top)*0.115
    side = min(cell.width*.73, (bottom-top)*.27)
    portrait = cell.crop((round(cell.width/2-side/2), round(cy-side/2), round(cell.width/2+side/2), round(cy+side/2)))
    portrait = portrait.resize((160, 160), Image.Resampling.LANCZOS)
    portrait.save(folder/'portrait.webp', 'WEBP', quality=86, method=6)
    sizes['portrait'] = (folder/'portrait.webp').stat().st_size
    # QA board: normal standing + four head expressions, on an opaque preview only.
    x, y = (index % 4)*255, (index // 4)*220
    normal = Image.open(folder/'neutral.webp');normal.thumbnail((95, 195))
    contact.paste(normal, (x, y+20), normal)
    for j, c in enumerate(cells):
        face = c.crop((round(c.width/2-side/2), round(cy-side/2), round(c.width/2+side/2), round(cy+side/2))).resize((65, 65))
        contact.paste(face, (x+100+(j%2)*70, y+30+(j//2)*75), face)
    draw.text((x+6,y+4), entry['key'], fill='#ffffff')
    report.append({'key':entry['key'], 'sourceSize':[width,height], 'bytes':sizes})
out = root / 'test-results/academy-presentation'
out.mkdir(parents=True, exist_ok=True)
contact.save(out/'character-contact.png')
(out/'asset-report.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print(f"{len(report)} characters / {len(report)*5} WebP assets / {sum(sum(r['bytes'].values()) for r in report):,} bytes")
