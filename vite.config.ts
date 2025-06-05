// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Detect build mode
const isLib = process.env.BUILD_LIB === 'true';

export default defineConfig({
  plugins: [react()],
  build: isLib
    ? {
        lib: {
          entry: 'src/index.ts',
          name: 'Riff',
          fileName: (format) => `riff.${format}.js`,
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      }
    : {
        outDir: 'dist', // for app build (gh-pages, Netlify, etc)
      },
  server: {
    open: true, // open browser on npm run dev
  },
});
