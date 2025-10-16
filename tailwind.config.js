/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        uipath: {
          orange: "#FA4616",
          "orange-hover": "#E63E0F",
        },
        success: "#10B981",
        error: "#EF4444",
        warning: "#F59E0B",
        background: "#F9FAFB",
        surface: "#FFFFFF",
        text: {
          primary: "#111827",
          secondary: "#6B7280",
        },
        border: {
          DEFAULT: "#E5E7EB",
          dark: "#D1D5DB",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      maxWidth: {
        form: "800px",
      },
      boxShadow: {
        focus: "0 0 0 3px rgba(250, 70, 22, 0.1)",
        button: "0 4px 12px rgba(250, 70, 22, 0.2)",
      },
      animation: {
        "scale-down": "scale-down 0.1s ease-in-out",
      },
      keyframes: {
        "scale-down": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.98)" },
        },
      },
    },
  },
  plugins: [],
};
