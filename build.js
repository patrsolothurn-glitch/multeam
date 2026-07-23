const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

console.log('🔨 Building Multeam...');

// Read source
let src = fs.readFileSync('./src/multeam.jsx', 'utf8');

// Adapt imports for browser globals (React loaded via CDN)
src = src
  .replace('import { useState, useEffect } from "react";', 'const { useState, useEffect } = React;')
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

// Write output
fs.mkdirSync('./docs', { recursive: true });
fs.writeFileSync('./docs/app.js', result.code, 'utf8');

// Read build number
let buildNum = 1;
try { buildNum = parseInt(fs.readFileSync('./build-number.txt', 'utf8').trim()) + 1; } catch(e) {}
fs.writeFileSync('./build-number.txt', String(buildNum));

console.log(`✅ Build Multeam-${buildNum} complete → docs/app.js`);
