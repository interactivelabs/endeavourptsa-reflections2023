import headlessuiPlugin from '@headlessui/tailwindcss';
import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['4rem', { lineHeight: '1' }],
      '7xl': ['5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        'ptsa-blue': {
          100: '#ebf1ff',
          200: '#d5e2ff',
          300: '#c0d0ff',
          400: '#abbeff',
          500: '#6f81ff',
          600: '#353bfa',
          700: '#1812e2',
          800: '#090278',
          900: '#050041',
        },
        'ptsa-red': {
          100: '#ffeae6',
          200: '#ffa79f',
          300: '#ffa79f',
          400: '#ff837d',
          500: '#fa6562',
          600: '#ee4f4e',
          700: '#db3f3f',
          800: '#bd3333',
          900: '#962828',
        },
      },
      backgroundImage: {
        'category-icons': "url('/images/r-category-icons.webp')",
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-dm-sans)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [headlessuiPlugin, forms],
};

export default config;
