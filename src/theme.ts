import {
    createMuiTheme,
    responsiveFontSizes,
} from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#31708E',
        },
        secondary: {
            main: '#8bbbe3',
        },
        background: {
            default: '#31708E',
        },
    },
    spacing: 4,
    zIndex: {
        appBar: 1400,
    },
});

export default responsiveFontSizes(theme);
