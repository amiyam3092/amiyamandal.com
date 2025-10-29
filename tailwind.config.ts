import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0b0b',
        foreground: '#fafafa',
        muted: '#9aa0a6'
      }
    },
  },
  plugins: [],
} satisfies Config;


