import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const buildDir = path.join(projectRoot, 'build');

const SITE_URL = 'https://goodlydevelopment.com';
const SITE_NAME = 'Goodly Development';
const OG_IMAGE = `${SITE_URL}/gdLogo.png`;

const toAbsoluteUrl = (pathname) => (pathname === '/' ? SITE_URL : `${SITE_URL}${pathname}`);

const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  email: 'jordan@goodlydevelopment.com',
  logo: OG_IMAGE,
  sameAs: ['https://www.linkedin.com/in/jordan-allen-gd/'],
};

const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
};

const routes = [
  {
    file: 'index.html',
    pathname: '/',
    title: 'Goodly Development | Product Development and Automation',
    description:
      'Goodly Development builds software products, automations, and integrations for growing teams.',
    type: 'website',
    structuredData: [
      organizationData,
      websiteData,
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'Service',
            name: 'Software Product Development',
            provider: { '@type': 'Organization', name: SITE_NAME },
            url: SITE_URL,
          },
        ],
      },
    ],
  },
  {
    file: path.join('support', 'index.html'),
    pathname: '/support',
    title: 'Support Requests | Goodly Development',
    description:
      'Submit product support, change requests, and development tasks through the Goodly Development support portal.',
    type: 'website',
    structuredData: [organizationData, websiteData],
  },
  {
    file: path.join('blog', 'index.html'),
    pathname: '/blog',
    title: 'Goodly Development Blog',
    description:
      'Insights, implementation guides, and practical notes on web development, IT operations, and automation.',
    type: 'blog',
    structuredData: [organizationData, websiteData],
  },
];

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const cleanupHead = (html) =>
  html
    .replace(/<link[^>]*rel="canonical"[^>]*>/gi, '')
    .replace(/<meta[^>]*name="description"[^>]*>/gi, '')
    .replace(/<meta[^>]*property="og:[^"]+"[^>]*>/gi, '')
    .replace(/<meta[^>]*name="twitter:[^"]+"[^>]*>/gi, '')
    .replace(/<script[^>]*type="application\/ld\+json"[^>]*>.*?<\/script>/gi, '');

const createSeoBlock = ({ title, description, pathname, type, structuredData }) => {
  const canonical = toAbsoluteUrl(pathname);
  const scripts = structuredData
    .map((entry) => `<script type="application/ld+json">${JSON.stringify(entry)}</script>`)
    .join('');

  return `
<title>${escapeHtml(title)}</title>
<link rel="canonical" href="${canonical}">
<meta name="description" content="${escapeHtml(description)}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:type" content="${type}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="${SITE_NAME}">
<meta property="og:image" content="${OG_IMAGE}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<meta name="twitter:image" content="${OG_IMAGE}">
${scripts}
`;
};

const run = async () => {
  for (const route of routes) {
    const filePath = path.join(buildDir, route.file);

    try {
      let html = await fs.readFile(filePath, 'utf8');
      html = cleanupHead(html);
      html = html.replace(/<title>.*?<\/title>/i, '');

      const seoBlock = createSeoBlock(route);
      html = html.replace('</head>', `${seoBlock}</head>`);

      await fs.writeFile(filePath, html, 'utf8');
      console.log(`[enforce-seo-html] Updated ${route.file}`);
    } catch {
      console.warn(`[enforce-seo-html] Skipped missing file: ${route.file}`);
    }
  }
};

run();
