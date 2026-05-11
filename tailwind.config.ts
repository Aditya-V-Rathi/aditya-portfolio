import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
        text: 'var(--text)',
        muted: 'var(--muted)',
      },
      fontFamily: {
        syne: 'var(--font-syne)',
        dm: 'var(--font-dm)',
      },
      animation: {
        'pulse-smooth': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
