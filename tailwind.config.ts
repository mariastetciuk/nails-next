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
        red: '#bb0a1e',
        lightred: '#e0d3d3',
        accent: '#FEE41F',
        lemon: '#FFF5A5',
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
      sm: '320px',
      md: '768px',
      lg: '1280px'
    }
    },
  plugins: [],
}
export default config
