/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'nba-blue': '#17408B',
        'nba-red': '#C9082A',
        'nba-silver': '#8E9090',
        'chart-green': '#36A2EB',
        'chart-red': '#FF6384',
        'chart-blue': '#4BC0C0',
        'chart-yellow': '#FFCE56',
        'chart-purple': '#9966FF',
        'chart-orange': '#FF9F40'
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      },
      screens: {
        'xs': '475px'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  },
  plugins: []
}