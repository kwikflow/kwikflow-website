import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kf: {
          bg: '#FFFFFF',
          'bg-subtle': '#FAFBFC',
          surface: '#FFFFFF',
          hairline: '#EEF1F4',
          'hairline-strong': '#E2E6EB',
          brand: '#00C8E8',
          'brand-text': '#0095AD',
          'brand-hover': '#00B2CF',
          heading: '#16181D',
          body: '#4B5563',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-inter)'],
      },
      letterSpacing: {
        tighter: '-0.04em',
      },
      animation: {
        'float-1': 'float1 20s ease-in-out infinite alternate',
        'float-2': 'float2 25s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'slide-down': 'slideDown 0.3s ease forwards',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
      },
      keyframes: {
        float1: {
          '0%': { transform: 'translateY(-30px)' },
          '100%': { transform: 'translateY(30px)' },
        },
        float2: {
          '0%': { transform: 'translate(-20px, -20px)' },
          '100%': { transform: 'translate(20px, 20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollLine: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(20px)', opacity: '0.3' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
