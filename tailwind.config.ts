import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#FBF9F7',
        'brand-surface': '#F5F1ED',
        'brand-primary': '#DDC5B8',
        'brand-text': '#4B4B4B',
      },
      fontFamily: {
        serif: ['var(--font-lora)'],
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}
export default config 