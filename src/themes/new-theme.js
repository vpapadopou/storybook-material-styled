import { createMuiTheme } from "@material-ui/core/styles";


const newOrange = '#d6511d';
const clearGreen = '#00bcd4';

/*export const newOrange = '#d6511d';
export const disabledGrey = '#dedede';
export const clearGreen = '#00bcd4'; */

/*
#92CBC5
#80CBC4
#4CB5AB
#009688
#549788
#078B75
#00BCD4
#0097A7
#3F51B5
#FF4081
#FF6E6E
#B92D00
#FFFF8D
#ECEFF0
#E4E7E8
#CCCCCC
#BDBDBD
#7D7D7D
#424242
#333333
#263238
#20272B
#000000
#000000 / 26%
#D6511D - orange

*/

export const overridings = {
    name: 'New Theme',
    palette: {
        awesomeColors: {
            primary: newOrange,
            secondary: clearGreen
        },
        primary: {
            light: newOrange,
            main: newOrange,
            dark: clearGreen,
            contrastText: "#fff",

            // UI
            appBg: 'white',
            appContentBg: 'silver',
            appBorderColor: 'grey',
            appBorderRadius: 4,

            // Typography
            fontBase: '"Open Sans", sans-serif',
            fontCode: 'monospace',

            // Text colors
            textColor: 'black',
            textInverseColor: 'rgba(255,255,255,0.9)',

            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
        },
    },
    typography: {
        htmlFontSize: 10, // Tell Material-UI what's the font-size on the html element is
        fontSize: 16, //outputted as rem
        h1: {

        }
    }
};

export default createMuiTheme(overridings);