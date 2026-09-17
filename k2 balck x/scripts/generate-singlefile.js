import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const htmlPath = path.join(distDir, 'index.html');

if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, 'utf8');

  // Find css files
  const cssMatch = html.match(/<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/);
  if (cssMatch) {
    const cssRel = cssMatch[1].replace(/^\//, '');
    const cssPath = path.join(distDir, cssRel);
    if (fs.existsSync(cssPath)) {
      const cssContent = fs.readFileSync(cssPath, 'utf8');
      html = html.replace(cssMatch[0], `<style>\n${cssContent}\n</style>`);
    }
  }

  // Find js files
  const jsMatch = html.match(/<script type="module" crossorigin src="(\/assets\/[^"]+\.js)"><\/script>/);
  if (jsMatch) {
    const jsRel = jsMatch[1].replace(/^\//, '');
    const jsPath = path.join(distDir, jsRel);
    if (fs.existsSync(jsPath)) {
      const jsContent = fs.readFileSync(jsPath, 'utf8');
      html = html.replace(jsMatch[0], `<script type="module">\n${jsContent}\n</script>`);
    }
  }

  // Write to public/k2-blackx.html and dist/k2-blackx.html
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outPathPublic = path.join(publicDir, 'k2-blackx.html');
  fs.writeFileSync(outPathPublic, html, 'utf8');

  const outPathDist = path.join(distDir, 'k2-blackx.html');
  fs.writeFileSync(outPathDist, html, 'utf8');

  // Also write to root directory as k2-blackx-singlefile.html for easy access
  fs.writeFileSync(path.resolve('k2-blackx-singlefile.html'), html, 'utf8');

  console.log('Single HTML bundle generated successfully at public/k2-blackx.html and k2-blackx-singlefile.html!');
} else {
  console.error('dist/index.html not found, run npm run build first');
}
