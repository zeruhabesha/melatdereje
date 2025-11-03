// PostCSS configuration for Next.js with Turbopack
const config = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nested',
    'tailwindcss': {},
    'autoprefixer': {},
  },
};

export default config;
