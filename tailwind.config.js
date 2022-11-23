module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
            },
            p: {
              textAlign: 'justify',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
