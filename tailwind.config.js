module.exports = {
  purge:
    process.env.NODE_ENV === "production"
      ? { content: ["src/**/*.njk", "src/**/*.js", "src/**/*.html"] }
      : {},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
