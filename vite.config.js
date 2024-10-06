import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/Graphs/', // This should match your GitHub repository name
  plugins: [react()],
});
