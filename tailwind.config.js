/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        mainBackground: "#F9F8F6",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-out': 'fadeOut 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      transitionDuration: {
        '3000': '3000ms', // Custom duration for 3 seconds
      },
      width: {
        '15.5rem': '15.5rem',
        '29rem': '29rem', 
        '32rem': '32rem', 
        '40rem': '40rem', 
      },
      height: {
        '32rem': '32rem', 
        '40rem': '40rem', 
        '44rem': '44rem', 
      },
      transitionProperty: {
        'custom-o': 'opacity',
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

