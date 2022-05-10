module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./submodules/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "md-max": { max: "991px" },
        "sm-max": { max: "767px" },
      },
      borderRadius: {
        circle: "50%",
      },
      backgroundColor: {
        "blue-900": "rgb(22,37,58)",
        "gray-50": "rgb(249,251,253)",
        "gray-1": "rgb(250, 250, 252)",
        "gray-2": "#EFF3F7",
        success: "#CCF7E5",
        danger: "#fad7dd",
        warning: "#fdf3d9",
        disabled: "#E2E6ED",
        "step-blue": "#2C7BE5",
        "application-yellow": "rgb(245,195,68)",
      },
      textColor: {
        'header-blue': '#2B7BE5',
        primary: "#2C7BE5",
        secondary: "#6E84A3",
        gray: "#6485AD",
      },
      width: {
        "200px": "200px",
        "100px": "100px",
        "120px": "120px",
        "150px": "150px",
        "50px": "50px",
        "90px": "90px",
        "4/10": "40%",
        "application-tag": "64px",
        "9/10": "90%",
        "8/10": "80%",
        "pushapp-card": "400px",
      },
      maxWidth: {
        "150px": "150px",
      },
      height: {
        "200px": "200px",
        "100px": "100px",
        "20px": "20px",
      },
      margin: {
        "[-1]": "-1px",
        center: "0 auto",
      },
      lineHeight: {
        "20px": "20px",
        "64px": "64px",
        44: "44px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
