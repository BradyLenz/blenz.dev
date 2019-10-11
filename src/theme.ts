import {
    createMuiTheme,
    responsiveFontSizes,
} from '@material-ui/core';

export const paletteTheme = createMuiTheme({
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
});

export const theme = responsiveFontSizes(createMuiTheme({
    palette: paletteTheme.palette,
    typography: {
        h1: {
            fontWeight: 600,
            [paletteTheme.breakpoints.up('md')]: {
                fontSize: '6rem',
            },
            [paletteTheme.breakpoints.down('md')]: {
                fontSize: '5rem',
            },
            [paletteTheme.breakpoints.down('sm')]: {
                fontSize: '4rem',
            },
            [paletteTheme.breakpoints.down('xs')]: {
                fontSize: '3rem',
            },
        },
        h2: {
            fontWeight: 500,
        },
        h3: {
            fontWeight: 500,
        },
        h4: {
            fontWeight: 500,
            color: paletteTheme.palette.text.primary,
        },
        h5: {
            fontWeight: 500,
        },
        h6: {
            fontWeight: 500,
        },
        body1: {
            color: paletteTheme.palette.text.hint,
        },
        body2: {
            color: paletteTheme.palette.text.hint,
        },
    },
    spacing: 4,
    zIndex: {
        appBar: 1400,
    },
}));
