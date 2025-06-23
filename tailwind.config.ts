import defaultTheme from "tailwindcss/defaultTheme";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#373737",
        secondary: "#9a9a9a",
        accent: {
          blue: "#52758b",
          light: "#c7deec",
          medium: "#b5cddf",
        },
      },
      fontSize: {
        base: "16px",
        hero: "clamp(2.5rem, 8vw, 5.375rem)",
        display: "clamp(3rem, 10vw, 6rem)",
      },
      spacing: {
        hero: "clamp(3rem, 8vw, 6rem)",
        section: "clamp(4rem, 10vw, 7rem)",
      },
      letterSpacing: {
        display: "0.165em",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      dropShadow: {
        text: "2px 2px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
