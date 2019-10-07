import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';

import { Home } from './components/home';
import { theme } from './theme';

export const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Home/>
            </ThemeProvider>
        </BrowserRouter>
    );
};
