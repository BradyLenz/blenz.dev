import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#d50000',
            light: '#ff5131',
            dark: '#9c0000',
        },
        secondary: {
            main: '#fafafa',
            light: '#ffffff',
            dark: '#c7c7c7',
        },
        type: 'light',
    },
    typography: {
        h1: {
            fontWeight: 500,
            fontFamily: 'sans-serif',
        },
    },
    spacing: 4,
});
