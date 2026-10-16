/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // User requested primary color #06447b
        primary: {
          DEFAULT: '#06447b',
          dark: '#04325c',
          darkest: '#021b33',
          light: '#0a5aa2',
          lighter: '#1e7ecb',
          subtle: '#eaf2f9',
        },
        navy: {
          950: '#031427', // Deep midnight stage
          900: '#06447b', // Primary brand color (#06447b)
          850: '#08325a',
          800: '#0a4b85',
          700: '#0e5f9f',
        },
        royal: {
          DEFAULT: '#06447b', // Primary brand blue
          hover: '#04345e',
          light: '#0a5ea8',
          subtle: '#eaf2f9',
        },
        gold: {
          DEFAULT: '#F59E0B', // Saffron warm gold
          hover: '#D97706',
          light: '#FCD34D',
          subtle: '#FEF3C7',
          border: 'rgba(245, 158, 11, 0.35)',
        },
        ember: {
          DEFAULT: '#EA580C',
          hover: '#C2410C',
        },
        saffron: '#F59E0B',
        brass: '#D4A574',
        cream: '#FEF3C7',
        offwhite: '#F8F9FC',
        slate: {
          text: '#64748B',
          dark: '#334155',
          light: '#94A3B8',
          muted: '#CBD5E1',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Fraunces"', '"Outfit"', 'serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'glow-primary': '0 0 30px -5px rgba(6, 68, 123, 0.45)',
        'glow-ember': '0 10px 40px rgba(234, 88, 12, 0.45)',
        'card-hover': '0 20px 40px -15px rgba(6, 68, 123, 0.15)',
        'card-dark': '0 20px 40px -15px rgba(2, 27, 51, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-ember': 'linear-gradient(135deg, #F59E0B 0%, #EA580C 60%, #C026D3 100%)',
        'gradient-brand': 'linear-gradient(135deg, #06447b 0%, #0a5ea8 50%, #1e88e5 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(3, 20, 39, 0.8) 0%, rgba(6, 68, 123, 0.88) 60%, #031427 100%)',
      }
    },
  },
  plugins: [],
}
