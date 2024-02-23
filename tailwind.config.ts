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
        red: '#660000',
        lightred: '#e0d3d3',
        redlight: '#ee0808',
        whiteopasity: '#fdfeff4d',
        darkgray: '#565656',
        graphite: '#4D4D4D',
        disabled: '#A9A9A9',
        darkyellow: '#B1A016',
        lightyellow: '#FFFDED',
        yellowshadow: '#DEDCCD',
        lightgrey: '#F3F3F5'
      },
      fontFamily: {
        namu: ['namu', 'sans-serif']
      }
    },
    screens: {
      sm: '480px',
      md: '740px',
      lg: '1280px',
      bg: '1440px'
    }
    },
  plugins: [],
}
export default config
