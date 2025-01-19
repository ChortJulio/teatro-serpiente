/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        yellow_primary: '#ffff00',
        black_primary: '#000000',
        // yellow_primary: '#efe52a',
        // orange_primary: '#ec6317',
        // pink_primary: '#a5175b',
        // pink_secondary: '#c26ba8',
        // purple_primary: '#891f76',
      },
    },
  },
  plugins: [],
}
