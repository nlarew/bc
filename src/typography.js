import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "sans-serif",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
  ],
  bodyFontFamily: ["sans-serif"],
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
