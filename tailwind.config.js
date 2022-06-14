module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '45max': '45vmax',
      },
      backgroundImage: {
        'back': "url('media/background.jpeg')",
      }
    },
  },
  plugins: [],
}