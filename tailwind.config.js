module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.ts", "./index.html"],
  theme: {
    extend: {
      fontSize: {
        badge: ['0.5rem', {
          lineHeight: '1rem'
        }]
      },
      colors: {
        'page-title': "#e5eff7"
      },
      transitionProperty: {
        'w': 'width',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};
