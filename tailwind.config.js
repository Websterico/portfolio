/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold-pixel': '#FFD700',
        'white': '#FFFFFF',
        'black': '#000000',
        'navy-blue': '#000080',
      },
    },
  },
  plugins: [],
};
