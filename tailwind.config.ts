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
        'span': '2.3rem',
        'link': '1.05rem',
        'title': '3rem',
        'icons': '2.5rem'
      },
      colors: {
      'primary-blue': '#004D99',
      'turq-blue': '#00B2E2',
      'light-coral': '#FF6F61',
      'med-gray': '#B0BEC5',
      'white': '#ffffff',
    },
  },
},
plugins: [],
}
export default config;
