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
        'max1070': {'max': '1070px'},
        'max1060': {'max': '1060px'},
        'max1000': {'max': '1000px'},
        'max950': {'max': '950px'},
        'max900': {'max': '900px'},
        'max870': {'max': '870px'},
        'max770': {'max': '770px'},
        'max720': {'max': '720px'},
        'max715': {'max': '715px'},
        'max700': {'max': '700px'},
        'max675': {'max': '675px'},
        'max620': {'max': '620px'},
        'max575': {'max': '575px'},
        'max550': {'max': '550px'},
        'max520': {'max': '520px'},
        'max500': {'max': '500px'},
        'max480': {'max': '480px'},
        'max425': {'max': '425px'},
        'max400': {'max': '400px'},
        'max375': {'max': '375px'},
        'max367': {'max': '367px'},
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
      'sec-white': '#f5f5f5',
    },
  },
},
plugins: [],
}
export default config;
