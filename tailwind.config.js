/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    sm:"480px",
    md:"768px",
    lg:"976px",
    xl:"1440px",
    extend: {
      colors:{
      primary: '#FF6363',
    secondary:{
      100:'#E2E2D5',
      200:'#888883',
    }
      },
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  plugins: [],
}
