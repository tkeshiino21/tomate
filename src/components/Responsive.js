import React from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

let theme = createMuiTheme({
  typography: {
    fontFamily: "Lato",
  },
});

theme = responsiveFontSizes(theme);

export default function Responsive() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography 
        color="primary"
        variant="h3"
        >
        toMate
        </Typography>
      </ThemeProvider>
    </div>
  );
}