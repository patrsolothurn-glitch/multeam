const fs = require('fs');
const path = require('path');

const TOKEN = process.env.GITHUB_TOKEN;
const REPO = 'patrsolothurn-glitch/multeam';
const BRANCH = 'main';
const MSG = process.argv[2] || 'update';

if (!TOKEN) { console.error('❌ GITHUB_TOKEN not set'); process.exit(1); }

const headers = {
  'Authorization': `token ${TOKEN}`,
  'Content-Type': 'application/json',
  'User-Agent': 'multeam-deploy'
};

async function getFileSHA(filePath) {
  const url = `https://api.github.com/repos/${REPO}/contents/${filePath}?ref=${BRANCH}`;
  const r = await fetch(url, { headers });
  if (r.ok) { const d = await r.json(); return d.sha; }
  return null;
}

async function pushFile(filePath, localPath) {
  const content = fs.readFileSync(localPath);
  const b64 = content.toString('base64');
  const sha = await getFileSHA(filePath);
  const body = { message: `${MSG} — ${filePath}`, content: b64, branch: BRANCH };
  if (sha) body.sha = sha;
  const url = `https://api.github.com/repos/${REPO}/contents/${filePath}`;
  const r = await fetch(url, { method: 'PUT', headers, body: JSON.stringify(body) });
  const ok = r.ok || r.status === 201;
  console.log(ok ? `  ✅ ${filePath}` : `  ❌ ${filePath} (${r.status})`);
  return ok;
}

async function main() {
  console.log(`🚀 Deploying Multeam → ${REPO}\n`);

  // First build
  require('child_process').execSync('node build.js', { stdio: 'inherit' });

  const files = [
    ['src/multeam.jsx',                   './src/multeam.jsx'],
    ['package.json',                       './package.json'],
    ['build.js',                           './build.js'],
    ['deploy.js',                          './deploy.js'],
    ['build-number.txt',                   './build-number.txt'],
    ['docs/index.html',                    './docs/index.html'],
    ['docs/app.js',                        './docs/app.js'],
    ['docs/manifest.json',                 './docs/manifest.json'],
    ['docs/sw.js',                         './docs/sw.js'],
    ['.github/workflows/deploy.yml',       './.github/workflows/deploy.yml'],
  ];

  for (const [remote, local] of files) {
    if (fs.existsSync(local)) await pushFile(remote, local);
  }

  console.log('\n✅ Deploy completo!');
  console.log(`🌐 URL: https://patrsolothurn-glitch.github.io/multeam`);
}

main().catch(console.error);
