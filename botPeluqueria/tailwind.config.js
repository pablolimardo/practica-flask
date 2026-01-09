/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Graffiti Street Art Palette
        'black-wall': '#0a0a0a',
        'concrete': '#1a1a1a',
        'concrete-light': '#2a2a2a',
        'neon-cyan': '#00FFFF',
        'hot-magenta': '#FF00FF',
        'lime-spray': '#39FF14',
        'white-stencil': '#FFFFFF',
        'orange-tag': '#FF6600',
        'purple-paint': '#9D00FF',
        'yellow-spray': '#FFFF00',
        'brick-red': '#8B1E1E',
      },
      fontFamily: {
        'marker': ['"Permanent Marker"', 'cursive'],
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'bangers': ['"Bangers"', 'cursive'],
        'graffiti': ['"Rubik Spray Paint"', 'cursive'],
      },
      dropShadow: {
        'neon-cyan': '0 0 10px #00FFFF',
        'neon-magenta': '0 0 10px #FF00FF',
        'neon-lime': '0 0 10px #39FF14',
        'spray-strong': '0 4px 8px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
};
