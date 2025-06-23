/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Your custom colors
        primary: "#373737",
        secondary: "#9a9a9a",
        accent: {
          blue: "#52758b",
          light: "#c7deec",
          medium: "#b5cddf",
        },
        // Add CSS variables for shadcn/ui compatibility
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
      },
      dropShadow: {
        text: "2px 2px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
