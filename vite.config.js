import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/Graphs/',  // Correct base path based on your repo name
  plugins: [react()],
});
