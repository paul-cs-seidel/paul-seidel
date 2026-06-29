import { defineConfig } from 'vite';

export default defineConfig({
  // Wurzel ist das Projekt-Verzeichnis selbst (index.html liegt hier).
  root: '.',

  // Alles in public/ wird 1:1 ins Build-Verzeichnis kopiert (Icons, Manifest …).
  publicDir: 'public',

  server: {
    port: 5173,
    open: true,
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
