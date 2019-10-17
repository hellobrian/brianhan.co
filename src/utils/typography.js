import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography({
  ...Wordpress2016,
  headerFontFamily: ["Karla", "sans-serif"],
  bodyFontFamily: ["Merriweather", "serif"],
  overrideStyles: () => ({
    h1: {
      letterSpacing: `-1px`,
    },
    h2: {
      letterSpacing: `-1px`,
    },
    h3: {
      letterSpacing: `-1px`,
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
