/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#110f10',
          2: '#9ca3af',
          3: '#27272a',
          4: '#1f1f22',
          5: '#d4d4d8',
        },
        green: '#00ff00',
        red: '#ff0000',
      },
      fontFamily: {
        glancyr: ['var(--font-glancyr)', 'sans-serif'],
        glancyr700: ['var(--font-glancyr700)', 'sans-serif'],
        spaceGrotesk: ['var(--font-spaceGrotesk)', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        ripple: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(0.9)',
          },
        },
        gridGlow: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        ripple: 'ripple var(--duration,3s) ease calc(var(--i,0)*0.2s) infinite',
        'spin-slow': 'spin 1.3s linear infinite',
        gridGlow: 'gridGlow 12s ease-in-out infinite',
      },
      boxShadow: {
        'custom-all': '0 3px 13px 0px #00000020',
      },
    },
  },
  plugins: [],
};
