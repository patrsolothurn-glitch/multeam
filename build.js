const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

console.log('🔨 Building Multeam...');

// Read source
let src = fs.readFileSync('./src/multeam.jsx', 'utf8');

// Adapt imports for browser globals (React loaded via CDN)
src = src
  .replace(/import \{([^}]+)\} from "react";/, (_, hooks) => `const {${hooks}} = React;`)
  .replace(/^export default function App\(\)/m, 'function App()');

// Add ReactDOM render
src += '\n\nReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));\n';

// Transpile JSX → JS
const result = babel.transform(src, {
  presets: [
    ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }],
    ['@babel/preset-react', { runtime: 'classic' }]
  ],
  compact: false,
  comments: false,
});

// Read & increment build number
let buildNum = 1;
try { buildNum = parseInt(fs.readFileSync('./build-number.txt', 'utf8').trim()) + 1; } catch(e) {}
fs.writeFileSync('./build-number.txt', String(buildNum));

// Write output
fs.mkdirSync('./docs', { recursive: true });
fs.writeFileSync('./docs/app.js', result.code, 'utf8');

// Update version in index.html so browser fetches fresh app.js
const indexPath = './docs/index.html';
let html = fs.readFileSync(indexPath, 'utf8');
html = html.replace(/app\.js\?v=\d+/, `app.js?v=${buildNum}`);
fs.writeFileSync(indexPath, html, 'utf8');

// Update SW cache version so it re-installs and clears old cache
const swPath = './docs/sw.js';
let sw = fs.readFileSync(swPath, 'utf8');
sw = sw.replace(/multeam-v\d+/, `multeam-v${buildNum}`);
fs.writeFileSync(swPath, sw, 'utf8');

console.log(`✅ Build Multeam-${buildNum} complete → docs/app.js (v=${buildNum})`);
