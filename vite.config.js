import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { plugins } from 'chart.js';

export default defineConfig({
  base: '/Graphs/', // Replace 'Graphs' with your repository name
  plugins: [react()],
});
