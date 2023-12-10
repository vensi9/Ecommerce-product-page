/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'orange': 'hsl(26, 100%, 55%)',
        'pale-orange': 'hsl(25, 100%, 94%)',
      },
      colors: {
        'orange': 'hsl(26, 100%, 55%)',
        'white': 'hsl(0, 0%, 100%)',
        'black': 'hsl(0, 0%, 0%)',
        'light-grayish-blue': ' hsl(223, 64%, 98%)',
        'grayish-blue': ' hsl(220, 14%, 75%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'very-dark-blue': 'hsl(220, 13%, 13%)',
      },
      fontFamily: {
        'plus-jakarta-sans': ['"Plus Jakarta Sans"', 'ui-sans'],
      },
      fontWeight: {
        '400': 400,
        '700': 700,
      },
      fontSize:{
        '10':'10px',
        '12':'12px',
        '14':'14px',
        '15':'15px',
        '16':'16px',
        '18':'18px',
        '20':'20px',
      },
      filter: {
        'drop-shadow-orange': 'drop-shadow(0 5px 8px #ff8d1a70)',
        'drop-shadow-white': 'drop-shadow(0 5px 8px #b6bcc833)',
      }
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
