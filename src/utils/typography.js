import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['400'],
    },
    {
      name: 'Barlow',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Playfair Display', 'serif'],
  bodyFontFamily: ['Barlow', 'sans-serif'],
})

export default typography
