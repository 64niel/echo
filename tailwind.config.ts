import { url } from "inspector";
import type { Config } from "tailwindcss";
// tailwind.config.js
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    nextui({
      themes: {
        dark: {
          colors: {
            background: {
              DEFAULT: "#0B132B",
              foreground: "#ffffff",
            },
            pagebackground: {
              DEFAULT: "#1C2541",
              foreground: "#ffffff",
            },
            cardbackground: {
              DEFAULT: "#0B132B",
              foreground: "#ffffff",
            },
            primary: {
              DEFAULT: "#1C2541",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#0B132B",
              foreground: "#ffffff",
            },
            third: {
              DEFAULT: "#2E604F",
              foreground: "#ffffff",
            },
            fourth: {
              DEFAULT: "#000000",
              foreground: "#ffffff",
            },
            fifth: {
              DEFAULT: "#50A589",
              foreground: "#ffffff",
            },
            textbw: {
              DEFAULT: "#000000",
              foreground: "#ffffff",
            },
            objbw: {
              DEFAULT: "#ffffff",
              foreground: "#000000",
            },
            focus: "#1C2541",
          },
        },
        light: {
          colors: {
            background: {
              DEFAULT: "#EEEEEE",
              foreground: "#000000",
            },
            pagebackground: {
              DEFAULT: "#DDDDDD",
              foreground: "#ffffff",
            },
            cardbackground: {
              DEFAULT: "#CCCCCC",
              foreground: "#ffffff",
            },
            primary: {
              DEFAULT: "#50A589",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: "#2E604F",
              foreground: "#ffffff",
            },
            third: {
              DEFAULT: "#3A7964",
              foreground: "#ffffff",
            },
            fourth: {
              DEFAULT: "#1C2541",
              foreground: "#ffffff",
            },
            fifth: {
              DEFAULT: "#2E604F",
              foreground: "#ffffff",
            },
            textbw: {
              DEFAULT: "#ffffff",
              foreground: "#000000",
            },
            objbw: {
              DEFAULT: "#000000",
              foreground: "#ffffff",
            },
            focus: "#50A589",
          },
        },
      },
    }),
  ],
};
export default config;
