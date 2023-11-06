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
        red: '#4d1414',
        lightred: '#e0d3d3',
        redlight: '#ee0808',
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
      sm: '400px',
      md: '768px',
      lg: '1280px',
      bg: '320px'
    }
    },
  plugins: [],
}
export default config
