const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Incluye los archivos de NextUI
  ],
  theme: {
    extend: {
      keyframes: {
        scaleImage: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.5)" },
        },
      },
      animation: {
        scaleImage: "scaleImage 10s ease-in-out infinite",
      },
      backgroundImage: {
        "landing-bg":
          "url('https://images.unsplash.com/photo-1643494555111-df0141d84a62?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
  },
  darkMode: "class", // Usa el modo oscuro basado en la clase
  plugins: [nextui()],
};
