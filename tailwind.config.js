/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // เปิดใช้งาน Dark Mode แบบ class
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // เราจะตั้งค่าฟอนต์ใน layout.js แทน
      },
      animation: {
        'blob': 'blob 7s infinite', // เพิ่ม animation ของคุณ
      },
      keyframes: {
        'blob': { // เพิ่ม keyframes ของคุณ
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        }
      },
    },
  },
  plugins: [],
}