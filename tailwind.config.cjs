/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,md,mdx,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: "JetBrains Mono, monospace",
        geist: "Geist mono, monospace",
      },
    },
  },
  plugins: [],
};
