import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/Graphs/', // Correct repo name
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Optional: helps chunking larger JS files
      }
    }
  },
  // Ensure the routing works for GitHub Pages:
  resolve: {
    alias: {
      // Add your aliases here
    }
  }
});
