/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "rgb(var(--primary-bg)/<alpha-value>)",
        "secondary-bg": "rgb(var(--secondary-bg)/<alpha-value>)",
        "ternary-bg": "rgb(var(--ternary-bg)/<alpha-value>)",
        "primary-text": "rgb(var(--primary-text)/<alpha-value>)",
        "secondary-text": "rgb(var(--secondary-text)/<alpha-value>)",
        "special-text": "rgb(var(--special-text)/<alpha-value>)",
      },
    },
    fontFamily: {
      sans: ["Helvatica", "Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      body: ["Atkinson", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
