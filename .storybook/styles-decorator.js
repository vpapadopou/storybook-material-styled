import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import LightTheme from '../src/themes/light-theme';

const StylesDecorator = storyFn => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <StyledThemeProvider theme={LightTheme}>
        <MuiThemeProvider theme={LightTheme}>
          {storyFn()}
        </MuiThemeProvider>
      </StyledThemeProvider>
  </StylesProvider>
);

export default StylesDecorator;