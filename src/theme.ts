import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#31708E',
        },
        secondary: {
            main: '#8FC1E3',
        },
        background: {
            default: '#31708E',
        },
        type: 'light',
    },
    typography: {
        h1: {
            fontWeight: 600,
        },
    },
    spacing: 4,
});
