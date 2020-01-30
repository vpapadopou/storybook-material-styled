import { addDecorator, configure } from '@storybook/react';

import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import ThemeProvider from './theme-provider';

import LightTheme from '../src/themes/light-theme';
import DarkTheme from '../src/themes/dark-theme';
import NewTheme from '../src/themes/new-theme';

const themes = [NewTheme, LightTheme, DarkTheme];
addDecorator(withThemesProvider(themes, ThemeProvider));

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
