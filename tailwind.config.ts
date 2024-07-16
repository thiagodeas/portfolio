import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      screens: {
        'custom': '1022px',
      },
      fontSize:{
        'span': '1.7rem',
        'link': '1.05rem',
        'title': '3rem',
        'icons': '2.8rem'
      },
      colors: {
      'primary-blue': '#0367A6',
      'medium-blue': '#0468BF',
      'light-blue': '#048ABF',
      'soft-blue': '#4EBFD9',
      'primary-green': '#025949',
    },
  },
},
plugins: [],
}
export default config;
