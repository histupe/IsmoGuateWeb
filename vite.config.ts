import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';

/**
 * Tarjetas de vista previa (WhatsApp, Facebook, etc.) para los enlaces del cotizador.
 * Después del build copia dist/index.html a cada ruta y cambia título, descripción e imagen.
 * Cloudflare Pages sirve ese archivo en la ruta, y la app funciona igual que en la página principal.
 */
const SITE = 'https://ismoguate.com.gt';
const COTIZAR_PAGES = [
  {
    route: 'cotizar',
    title: 'Cotiza en 1 minuto | Ismo Guate',
    description: 'Responde unas preguntas rápidas y te enviamos una propuesta a tu medida por WhatsApp.',
    image: '/assets/social/preview-social.jpg',
  },
  {
    route: 'cotizar/sound',
    title: 'Cotiza el sonido de tu evento | Ismo Sound',
    description: 'Audio, micrófonos e iluminación con montaje incluido. Cotiza en 1 minuto y recibe tu propuesta por WhatsApp.',
    image: '/assets/social/cotizar-sound.jpg',
  },
  {
    route: 'cotizar/creativity',
    title: 'Cotiza tus productos personalizados | Ismo Creativity',
    description: 'Tazas, playeras, stickers, invitaciones y más. Cotiza en 1 minuto y recibe tu propuesta por WhatsApp.',
    image: '/assets/social/cotizar-creativity.jpg',
  },
];

function setMeta(html: string, attr: 'property' | 'name', key: string, value: string) {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`);
  return html.replace(re, `$1${value}$2`);
}

function cotizarPreviewPages(): Plugin {
  return {
    name: 'cotizar-preview-pages',
    apply: 'build',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist');
      const base = fs.readFileSync(path.join(outDir, 'index.html'), 'utf-8');
      for (const page of COTIZAR_PAGES) {
        const url = `${SITE}/${page.route}`;
        const image = `${SITE}${page.image}`;
        let html = base.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);
        html = setMeta(html, 'property', 'og:title', page.title);
        html = setMeta(html, 'property', 'og:description', page.description);
        html = setMeta(html, 'property', 'og:image', image);
        // Tamaño y tipo de la imagen: WhatsApp los usa para mostrar la foto grande.
        html = html.replace(
          /(<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>)/,
          `$1\n    <meta property="og:image:secure_url" content="${image}" />\n    <meta property="og:image:type" content="image/jpeg" />\n    <meta property="og:image:width" content="1200" />\n    <meta property="og:image:height" content="630" />\n    <meta property="og:image:alt" content="${page.title}" />`,
        );
        html = setMeta(html, 'property', 'og:url', url);
        html = setMeta(html, 'name', 'twitter:title', page.title);
        html = setMeta(html, 'name', 'twitter:description', page.description);
        html = setMeta(html, 'name', 'twitter:image', image);
        // Se guarda como cotizar/sound.html (no cotizar/sound/index.html): así Cloudflare Pages
        // responde en /cotizar/sound directamente, sin redirigir a /cotizar/sound/.
        const file = path.join(outDir, `${page.route}.html`);
        fs.mkdirSync(path.dirname(file), {recursive: true});
        fs.writeFileSync(file, html);
      }
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), cotizarPreviewPages()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
