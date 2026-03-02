import { execSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.resolve(__dirname, '..', 'build');

// Routes that need their own index.html (must match enforce-seo-html.mjs)
const ROUTE_DIRS = ['it-services', 'web-services', 'support', 'blog', 'privacy'];

async function main() {
  if (!process.env.VERCEL) {
    // Local: use react-snap to pre-render each route
    execSync('react-snap', { stdio: 'inherit', cwd: path.resolve(__dirname, '..') });
  } else {
    // Vercel: no Chrome — copy index.html to each route so enforce-seo-html can inject meta
    const indexHtml = await fs.readFile(path.join(buildDir, 'index.html'), 'utf8');
    for (const dir of ROUTE_DIRS) {
      const outDir = path.join(buildDir, dir);
      await fs.mkdir(outDir, { recursive: true });
      await fs.writeFile(path.join(outDir, 'index.html'), indexHtml, 'utf8');
    }
    console.log('[postbuild] Created route HTML files for Vercel (no Puppeteer).');
  }

  // Always inject SEO into all route HTML files
  execSync('node scripts/enforce-seo-html.mjs', {
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '..'),
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
