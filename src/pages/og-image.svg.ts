import type { APIRoute } from 'astro';
import { site } from '../config';

export const GET: APIRoute = async () => {
  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
        </linearGradient>
      </defs>

      <rect width="1200" height="630" fill="#0a0f12"/>

      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a2332" stroke-width="1"/>
      </pattern>
      <rect width="1200" height="630" fill="url(#grid)" opacity="0.3"/>

      <text x="80" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="url(#grad)">
        ${site.name}
      </text>

      <text x="80" y="260" font-family="system-ui, -apple-system, sans-serif" font-size="36" fill="#94a3b8">
        ${site.role}
      </text>

      <text x="80" y="340" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#64748b" style="max-width: 1000px;">
        ${site.tagline}
      </text>

      <rect x="80" y="420" width="400" height="4" fill="url(#grad)" rx="2"/>

      <text x="80" y="500" font-family="'JetBrains Mono', monospace" font-size="20" fill="#64748b">
        $ cd ~/portfolio &amp;&amp; ls -la
      </text>
    </svg>
  `;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
