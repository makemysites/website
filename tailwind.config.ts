import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#09090B',
        surface: '#111115',
        card: '#18181B',
        'card-hover': '#1C1C20',
        border: '#27272A',
        'border-hover': '#3F3F46',
        'text-primary': '#FAFAFA',
        'text-secondary': '#A1A1AA',
        'text-muted': '#52525B',
        accent: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          subtle: 'rgba(99, 102, 241, 0.12)',
          glow: 'rgba(99, 102, 241, 0.25)',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#1DA851',
        },
        success: '#22C55E',
        warning: '#F59E0B',
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(48px, 6vw, 72px)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        h2: ['clamp(32px, 4vw, 48px)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        h3: ['clamp(20px, 2.5vw, 28px)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.75', fontWeight: '400' }],
        body: ['16px', { lineHeight: '1.7', fontWeight: '400' }],
        sm: ['14px', { lineHeight: '1.6', fontWeight: '500' }],
        label: ['12px', { lineHeight: '1', letterSpacing: '0.08em', fontWeight: '600' }],
        mono: ['13px', { lineHeight: '1', fontWeight: '500' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
        pill: '100px',
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37,211,102,0.4)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 16px rgba(37,211,102,0)' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37,211,102,0)' },
        },
        'orb-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.98)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'dot-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.4)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'orb-float': 'orb-float 12s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'scroll-left': 'scroll-left 30s linear infinite',
        'fade-up': 'fade-up 400ms ease forwards',
        'fade-in': 'fade-in 400ms ease forwards',
        'dot-pulse': 'dot-pulse 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
