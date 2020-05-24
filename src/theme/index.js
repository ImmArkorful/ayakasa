import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Major Mono Display', 'monospace', 'Alegreya Sans', ' sans-serif'],
  },
})

export default {
  ayasun: {
    colors: {
      background: '#E31C79',
      darkerPrimary: '#8D0053',
      primaryText: '#000000',
      white: '#ffffff',
      buttonText: '#ffffff',
      inActiveLabelColor: '#8e8e8f',
      black: '#000000',
    },
    fonts: {
      primary: 'Major Mono Display',
      secondary: 'Alegreya Sans',
    },
  },
}
