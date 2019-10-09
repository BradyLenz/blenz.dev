import React from 'react';
import {
    Box,
    CssBaseline,
    Container,
} from '@material-ui/core';

import { Header } from '../header';
import { Intro } from './intro';
import {
    ISection,
    content,
} from '../../util/data';

export const Home = () => {
    return (
        <Container maxWidth='lg'>
            <CssBaseline/>
            <Header/>
            <Box height='100vh'>
                <Intro/>
            </Box>
            {
                content.map((item: ISection) => {
                    return (
                        <Box
                            key={content.indexOf(item)}
                            minHeight='100vh'
                            id={item.link}
                        >
                            {
                                (item.element) ? item.element() : item.title
                            }
                        </Box>
                    );
                })
            }
        </Container>
    );
};
