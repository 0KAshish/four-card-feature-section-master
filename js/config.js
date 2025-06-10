tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        reds: "hsl(0, 78%, 62%)",
        cyans: "hsl(180, 62%, 55%)",
        oranges: "hsl(34, 97%, 64%)",
        blues: "hsl(212, 86%, 64%)",
        whites: "hsl(0, 0%, 100%)",
      },
      boxShadow: {
        light:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        dark: "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.4)",
        "glow-light": "0 0 10px rgba(100, 100, 255, 0.2)",
        "glow-dark": "0 0 15px rgba(100, 100, 255, 0.5)",
      },
    },
  },
};
