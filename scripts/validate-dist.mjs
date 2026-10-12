import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const site = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8')).homepage;
const base = new URL(site).pathname;
const projects = JSON.parse(await readFile(path.join(root, 'src/projects/projects.json'), 'utf8'));
assert.equal(new Set(projects.map(p => p.id)).size, projects.length, 'Duplicate project ID');
assert.equal(new Set(projects.map(p => p.path)).size, projects.length, 'Duplicate project URL');
for (const p of projects) {
  assert(['react','static'].includes(p.type));
  assert(['game','tool','experiment'].includes(p.category));
  assert(/^\/[a-z0-9/-]+\/$/.test(p.path), 'Invalid route: ' + p.path);
}
const files = [];
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file); else files.push(file);
  }
}
await walk(dist);
const known = new Set(files.map(file => path.relative(dist, file).split(path.sep).join('/')));
const errors = [];
let references = 0;
function check(ref, file, documentBase) {
  if (!ref || /^(?:data:|https?:|mailto:|tel:|javascript:|#|\/\/)/i.test(ref)) return;
  if (/[{}]/.test(ref)) return;
  const location = documentBase || new URL(path.relative(dist, file).split(path.sep).join('/'), site).href;
  const target = new URL(ref.replace(/&amp;/g, '&'), location);
  if (target.origin !== new URL(site).origin) return;
  references++;
  if (!target.pathname.startsWith(base)) { errors.push(file + ': outside base ' + ref); return; }
  const relative = decodeURIComponent(target.pathname.slice(base.length));
  if (!known.has(relative) && !known.has(relative.replace(/\/?$/, '/') + 'index.html')) errors.push(path.relative(dist, file) + ': missing ' + ref);
}
for (const file of files) {
  const extension = path.extname(file);
  if (!['.html', '.css'].includes(extension)) continue;
  const content = await readFile(file, 'utf8');
  if (extension === '.html') {
    const documentBase = content.match(/<base[^>]*href=["']([^"']+)["']/i)?.[1];
    for (const tag of content.matchAll(/<(?:script|link|img|audio|source|video|iframe|a)\b[^>]*>/gi)) {
      for (const match of tag[0].matchAll(/(?:src|href|poster)=["']([^"']*)["']/gi)) check(match[1], file, documentBase ? new URL(documentBase, site).href : undefined);
    }
  } else {
    for (const match of content.matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*))\s*\)/g)) check(match[1] ?? match[2] ?? match[3].trim(), file);
  }
}
const titles = new Set(), descriptions = new Set(), images = new Set();
for (const project of projects) {
  const file = path.join(dist, project.path, 'index.html');
  const html = await readFile(file, 'utf8');
  const get = key => [...html.matchAll(/<meta\b[^>]*>/gi)].filter(m => m[0].includes('property="' + key + '"'));
  for (const key of ['og:type','og:title','og:description','og:image','og:url']) assert.equal(get(key).length, 1, project.id + ': duplicate/missing ' + key);
  assert(html.includes('content="' + new URL(project.path.slice(1), site).href + '"'), project.id + ': wrong canonical URL');
  assert(html.includes('name="twitter:card" content="summary_large_image"'), project.id);
  assert.equal(new URL(project.ogImage, site).protocol, 'https:');
  const png = await readFile(path.join(dist, project.ogImage));
  assert.equal(png.readUInt32BE(16), 1200); assert.equal(png.readUInt32BE(20), 630);
  assert(!titles.has(project.title)); assert(!descriptions.has(project.description)); assert(!images.has(project.ogImage));
  titles.add(project.title); descriptions.add(project.description); images.add(project.ogImage);
  if (project.type === 'static') {
    const source = await readFile(path.join(root, 'legacy-games', project.source, 'index.html'), 'utf8');
    // Entry markup stays intact through bundling and metadata insertion.
    for (const match of source.matchAll(/class="([^"\n]+)"/g)) assert(html.includes('class="' + match[1] + '"'), project.id + ': removed UI markup');
    const publicDir = path.join(root, 'legacy-games', project.source, 'public');
    try {
      const verify = async (dir, rel = '') => {
        for (const entry of await readdir(dir, { withFileTypes: true })) {
          const child = path.join(dir, entry.name), next = path.join(rel, entry.name);
          if (entry.isDirectory()) await verify(child, next);
          else assert.equal((await stat(child)).size, (await stat(path.join(dist, project.path, next))).size, project.id + ': asset changed ' + next);
        }
      };
      await verify(publicDir);
    } catch (error) { if (error.code !== 'ENOENT' || error.path !== publicDir) throw error; }
  }
}
assert.equal(errors.length, 0, errors.join('\n'));
console.log('Verified ' + projects.length + ' project entries, unique OG metadata/images, original public assets, and ' + references + ' local HTML/CSS references.');
