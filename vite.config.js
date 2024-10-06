// vite.config.js
import { defineConfig } from 'vite';  // Correct import for defineConfig
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/Graphs/', // Ensure this matches your repository name
  plugins: [react()],
});
