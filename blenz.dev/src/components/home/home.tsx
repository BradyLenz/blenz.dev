import React from 'react';
import {
    Box,
    CssBaseline,
} from '@material-ui/core';

import { Header } from '../header';
import { Intro } from '../intro';

export const Home = () => {
    return (
        <Box>
            <CssBaseline/>
            <Header/>
            <Box minHeight='100vh'>
                <Intro/>
            </Box>
            <Box minHeight='100vh'>
                About Me
            </Box>
            <Box minHeight='100vh'>
                Work Experience
            </Box>
            <Box minHeight='100vh'>
                Projects
            </Box>
            <Box minHeight='100vh'>
                Contact
            </Box>
        </Box>
    );
};
