/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "hover:bg-[#f0db4f]",
    "hover:bg-[#007acc]",
    "hover:bg-[#fefefe]",
    "hover:bg-[#303030]",
    "hover:bg-[#e34c25]",
    "hover:bg-[#2965f1]",
    "hover:bg-[#222222]",
    "hover:bg-[#232531]",
    "hover:text-[#323330]",
    "hover:text-[#ffffff]",
    "hover:text-[#000000]",
    "hover:text-[#3c873a]",
    "hover:text-[#61dbfb]",
    "hover:text-[#8993be]",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-fira-sans)", "sans-serif"],
      poppins: ["var(--font-poppins)", "monospace"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/hero-bg.png')",
      },
      boxShadow: {
        button: "0px 0px 68px 7px rgb(33 150 243);",
      },
    },
  },
  plugins: [],
};
