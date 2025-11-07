import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E4C7A',
        secondary: '#8892A6',
        accent: '#F5B400',
        slate: {
          900: '#1B1D1F',
          700: '#2E3237'
        }
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 12px 30px rgba(30, 76, 122, 0.12)',
        'soft-lg': '0 20px 50px rgba(30, 76, 122, 0.15)'
      }
    }
  },
  plugins: []
};

export default config;
