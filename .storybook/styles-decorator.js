import React from "react";
import { StylesProvider } from "@material-ui/styles";

const StylesDecorator = storyFn => (
  <StylesProvider injectFirst>
    {storyFn()}
  </StylesProvider>
);

export default StylesDecorator;