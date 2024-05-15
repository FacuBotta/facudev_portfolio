import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cyan': '#67e8f9',
        'magenta-dark': '#ff00ff',
        'magenta-light': '#f0a4f0',
        'yellow': '#FACC15'
      },
      fontFamily: {
        'neon': ['Tilt Neon', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
