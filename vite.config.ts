import tailwind from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    tailwind(),  // Tailwind v4 Vite 플러그인
  ],
  define: {
    global: 'globalThis',  // Browser and Worker share a portable global alias.
  },
  base: '/web-hub/',
});
