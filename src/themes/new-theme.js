import { createMuiTheme } from "@material-ui/core/styles";

const newOrange = '#d6511d';
//const disabledGrey = '#dedede';
const clearGreen = '#00bcd4';

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
            contrastText: "#fff"
        },
    }
};

export default createMuiTheme(overridings);