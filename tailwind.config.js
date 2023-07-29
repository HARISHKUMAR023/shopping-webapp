/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/styles/**/*.{html,js,ejs}",
  './views/customer/auth/**/*.{html,js,ejs}',
  './views/customer/includes/**/*.{html,js,ejs}'


],
  
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

