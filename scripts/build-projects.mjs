import { build } from 'vite';
import { cp, mkdir, readFile, readdir, writeFile, rm, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const projects = JSON.parse(await readFile(path.join(root, 'src/projects/projects.json'), 'utf8'));
const registered = new Set(projects.filter(p => p.type === 'static').map(p => p.source));
for (const entry of await readdir(path.join(root, 'legacy-games'), { withFileTypes:true })) {
  if (entry.isDirectory() && !registered.has(entry.name)) throw new Error('Unregistered legacy project: ' + entry.name);
}
const staging = path.join(root, '.build-projects');
// Only this fixed, generated workspace directory is ever removed.
await rm(staging, { recursive: true, force: true });
await mkdir(staging, { recursive: true });
const exists = async file => access(file).then(() => true, () => false);
async function files(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (['node_modules', 'dist', '.git'].includes(entry.name)) continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await files(file)); else result.push(file);
  }
  return result;
}
for (const project of projects.filter(p => p.type === 'static')) {
  if (!/^[\w-]+$/.test(project.source) || !/^\/(games|tools|experiments)\/[\w-]+\/$/.test(project.path)) {
    throw new Error('Unsafe project path: ' + project.id);
  }
  const source = path.join(root, 'legacy-games', project.source);
  const destination = path.join(root, 'dist', project.path.slice(1));
  const workspace = path.join(staging, project.source);
  await cp(source, workspace, { recursive: true, filter: file => !['node_modules', 'dist', '.git'].includes(path.basename(file)) });
  if (await exists(path.join(source, 'package.json'))) {
    // HTML fragments in advertise use root-relative document resources at runtime.
    for (const file of await files(workspace)) {
      if (!file.endsWith('.html')) continue;
      let html = await readFile(file, 'utf8');
      html = html.replace(/href=["']\/vite.svg["']/g, 'href="' + '/web-hub/vite.svg' + '"');
      if (path.dirname(file) !== workspace) {
        html = html.replace(/((?:src|href)=["'])\.\/src\//g, '$1../src/');
        html = html.replace(/<head>/i, '<head><base href="/web-hub' + project.path + '">');
      }
      await writeFile(file, html);
    }
    const input = (await files(workspace)).filter(file => file.endsWith('.html'));
    await build({
      configFile: false, root: workspace, base: '/web-hub' + project.path,
      build: { outDir: destination, emptyOutDir: true, rollupOptions: { input } },
    });
  } else {
    await cp(workspace, destination, { recursive: true });
  }
  // An old audio preload points to the root although its files are in effect/.
  if (project.source === 'Rhythm-Game') {
    for (const name of ['up', 'down', 'left', 'right']) {
      await cp(path.join(destination, 'effect', name + '.mp3'), path.join(destination, name + '.mp3'));
    }
  }
  // Copy standalone script omitted by Vite (plain script tags are not bundled).
  for (const file of await files(workspace)) {
    if (file.endsWith('.html')) continue;
    if (project.source === 'Study_record' && file.endsWith('.js')) {
      await cp(file, path.join(destination, path.relative(workspace, file)));
    }
  }
  console.log('Built ' + project.id + ' → /web-hub' + project.path);
}
