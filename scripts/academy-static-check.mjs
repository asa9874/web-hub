import {spawnSync} from 'node:child_process';
import {root} from './academy-check.mjs';
const args=process.argv.slice(2);if(args.length!==2||args[0]!=='--kind'||!['types','build'].includes(args[1]))throw Error('Expected --kind types|build');
const commands=args[1]==='types'?[['node_modules/typescript/bin/tsc','-p','tsconfig.app.json','--noEmit'],['node_modules/typescript/bin/tsc','-p','tsconfig.node.json','--noEmit']]:[['node_modules/vite/bin/vite.js','build','--emptyOutDir','false'],['scripts/validate-dist.mjs']];
for(const command of commands){const r=spawnSync(process.execPath,command,{cwd:root,stdio:'inherit',shell:false});if(r.error||r.status!==0){if(r.error)console.error(r.error.message);process.exitCode=r.status||2;break;}}
