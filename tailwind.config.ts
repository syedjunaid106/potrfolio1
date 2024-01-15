import type { Config } from 'tailwindcss'
import { Paytone_One } from 'next/font/google';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
    
    extend: {
      colors:{
         navbg:'#583EBC',
         cardbg:'#6851C3',
         darktext:'#181720'
        },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        fhead:['var(--paytone)'],
        fpara:['var(--mont)']
      }
      
    },
  },
  plugins: [],

}
export default config
