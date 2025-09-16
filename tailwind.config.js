// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        orbit: 'orbit 6s linear infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        rotate: 'rotate 10s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(40px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(360deg) translateX(40px) rotate(-360deg)',
          },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.9)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
