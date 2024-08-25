/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    keyframes: {
      'scale-in': {
        from: { transform: 'scale(0)' },
        to: { transform: 'scale(1)' },
      },
      'scale-out': {
        from: { transform: 'scale(1)' },
        to: { transform: 'scale(0)' },
      },
    },
    animation: {
      'scale-in': 'scale-in 0.3s ease-in-out backwards',
      'scale-out': 'scale-out 0.3s ease-in-out forwards',
    },
  },
  plugins: [],
};
