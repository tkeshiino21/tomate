import { createMuiTheme,responsiveFontSizes } from '@material-ui/core/styles';


export let theme = createMuiTheme({
  typography: {
    fontFamily: "Josefin",
  },
  palette: {
    primary: {
      main: '#d42d27',
    },
    secondary: {
      main: '#52a84a',
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff"
    },
  },
});

theme = responsiveFontSizes(theme);