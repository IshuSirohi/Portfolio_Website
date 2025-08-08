/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "ping-once": "ping 0.8s cubic-bezier(0, 0, 0.2, 1)",
        slideInLeft: 'slideInLeft 0.8s ease-out both',
      },
      keyframes: {
    slideInLeft: {
      '0%': { transform: 'translateX(-100%)', opacity: '0' },
      '100%': { transform: 'translateX(0)', opacity: '1' },
    },
  },
    },
  },
  plugins: [],
}

