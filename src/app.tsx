import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import { Home } from './components/home';
import theme from './theme';
import {
    Box,
    CssBaseline,
} from '@material-ui/core';

export const App = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Box>
                    <Switch>
                        <Route
                            path='/'
                            component={Home}
                        />
                        <Redirect to='/'/>
                    </Switch>
                </Box>
            </ThemeProvider>
        </BrowserRouter>
    );
};
