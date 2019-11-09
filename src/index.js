import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from './components/Theme'

render(
  <MuiThemeProvider theme={theme} >
    <App />
  </MuiThemeProvider>,

document.getElementById('root'));
