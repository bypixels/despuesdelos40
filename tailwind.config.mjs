/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#1B3A57',
        'secondary': '#E84A27',
        'accent': '#29B1E3',
        'coral': '#F57876',
        'golden': '#F7B500',
        'footer': '#282262',
      },
      fontFamily: {
        'heading': ['Bricolage Grotesque', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
