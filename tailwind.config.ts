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
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        extend: {
          fontFamily: {
            'segoeui': ['SegoeUI', 'Helvetica', 'Arial']
          },
        },
        dark: {
          colors: {
            background: {
              DEFAULT: "#0B132B",
              foreground: "#ffffff",
            },
            primary: {
              DEFAULT: "#1C2541",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#50A589",
              foreground: "#ffffff",
            },
            third: {
              DEFAULT: "#2E604F",
              foreground: "#ffffff",
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
            primary: {
              DEFAULT: "#50A589",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: "#2E604F",
              foreground: "#ffffff",
            },
            third: {
              DEFAULT: "#50A589",
              foreground: "#ffffff",
            },
            focus: "#50A589",
          },
        }
      },
    }),
  ],
};
export default config;
