import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {


      
      backgroundImage: {
        about: "url('../public/images/AboutPage/AboutPageBaackground.png')",
        contact: "url('../public/images/ContactPage/ContactPageHome.png')",
        // shop: "url('../public/images/Shop/ShopBackImage.png')",
    
      },

      colors: {

        gray: '#E3E0E0',
        darkGray: '#C2BEBE',
        purpleBlue: '#131118',
        yellow: '#CB9B00',
        lightyellow:"#FAA61A",
        overlay: "#141E30",
        green:"#045E07"
      },
    },
  },
  plugins: [],
} satisfies Config;
