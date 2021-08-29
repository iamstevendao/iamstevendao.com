module.exports = {
  purge: ['./src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      body: ['"Open Sans"', 'sans-serif'],
    },
    extend: {
      colors: {
        dracula: {
          background: '#282a36',
          yellow: '#f1fa8c',
          purple: '#bd93f9',
          selection: '#44475a',
          foreground: '#F8F8F2',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
