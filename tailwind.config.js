import { plugins } from 'chart.js';
import { theme, extend } from 'highcharts';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'frameImg': "url('/img-bg.jpg')", // Replace with your image path
      },
    },
  },
  plugins: [],
}


