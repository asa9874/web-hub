import { readFile, writeFile, mkdir, access, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const site = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8')).homepage;
const projects = JSON.parse(await readFile(path.join(root, 'src/projects/projects.json'), 'utf8'));
const hub = { id: 'web-hub', title: 'Web Hub', description: '게임, 도구, 웹 실험을 한곳에서 만나보세요.', path: '/', ogImage: 'og/default.png', type: 'react' };
const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const url = value => new URL(value.replace(/^\//, ''), site).href;
export function withMetadata(html, project, pagePath = project.path) {
  html = html.replace(/<meta\b[^>]*(?:property=["']og:[^"']+["']|name=["'](?:twitter:[^"']+|description)["'])[^>]*>/gi, '')
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, '')
    .replace(/<title>[\s\S]*?<\/title>/gi, '');
  const metadata = {
    'og:type': 'website', 'og:title': project.title, 'og:description': project.description,
    'og:image': url(project.ogImage || 'og/default.png'), 'og:url': url(pagePath),
    'og:image:width': '1200', 'og:image:height': '630',
  };
  const tags = Object.entries(metadata).map(([property, content]) => '<meta property="' + property + '" content="' + escape(content) + '" />').join('\n');
  return html.replace(/<\/head>/i, '<title>' + escape(project.title) + '</title>\n<meta name="description" content="' + escape(project.description) + '" />\n' + tags + '\n<meta name="twitter:card" content="summary_large_image" />\n<link rel="canonical" href="' + escape(url(pagePath)) + '" />\n</head>');
}
await mkdir(path.join(dist, 'og'), { recursive: true });
for (const project of [hub, ...projects]) {
  const output = path.join(dist, project.ogImage);
  await mkdir(path.dirname(output), { recursive: true });
  // Existing screenshots/art are preferred. Projects without one get their own titled card.
  const source = project.ogSource ? path.join(root, 'legacy-games', project.source, project.ogSource)
    : project.type === 'react' && project.id !== 'web-hub' ? path.join(root, 'public/VisualNovel/Background', project.id.startsWith('mga') ? 'bg_mga_server_room.png' : 'title.png') : null;
  const hue = [...project.id].reduce((value, c) => value + c.charCodeAt(0) * 17, 0) % 360;
  const overlay = Buffer.from('<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect y="400" width="1200" height="230" fill="#070b22" opacity="0.9"/><text x="60" y="475" fill="#89d9ff" font-size="26" font-family="sans-serif">WEB HUB · ' + escape(project.id.toUpperCase()) + '</text><text x="60" y="555" fill="white" font-size="48" font-family="sans-serif">' + escape(project.title) + '</text></svg>');
  let image;
  if (source && await access(source).then(() => true, () => false)) image = sharp(source).resize(1200, 630, { fit: 'cover' });
  else image = sharp({ create: { width: 1200, height: 630, channels: 3, background: 'hsl(' + hue + ', 55%, 18%)' } });
  await image.composite([{ input: overlay }]).png().toFile(output);
}
const template = await readFile(path.join(dist, 'index.html'), 'utf8');
await writeFile(path.join(dist, 'index.html'), withMetadata(template, hub));
for (const project of projects) {
  const directory = path.join(dist, project.path);
  await mkdir(directory, { recursive: true });
  if (project.type === 'react') await writeFile(path.join(directory, 'index.html'), withMetadata(template, project));
  else {
    const walk = async dir => {
      for (const entry of await readdir(dir, { withFileTypes: true })) {
        const file = path.join(dir, entry.name);
        if (entry.isDirectory()) await walk(file);
        else if (entry.name.endsWith('.html')) {
          const pagePath = '/' + path.relative(dist, file).split(path.sep).join('/').replace(/index.html$/, '');
          await writeFile(file, withMetadata(await readFile(file, 'utf8'), project, pagePath));
        }
      }
    };
    await walk(directory);
  }
}
// Pages serves existing directories directly; fallback only handles unknown paths.
await writeFile(path.join(dist, '404.html'), withMetadata(template, hub));
await writeFile(path.join(dist, '.nojekyll'), '');
console.log('Generated static metadata and 1200×630 PNG images for ' + (projects.length + 1) + ' pages.');
