import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  gradientBG: 'linear-gradient(right, #69c6af 30%, #244a80 100%)',
  text: {
    white: '#ffffff',
    light: '#88deb0',
  },
  palette: {
    primary: {
      main: '#4eadaf',
    },
    secondary: {
      main: '#152069',
    },
  },
  primary: '#4eadaf',
})

export default theme
