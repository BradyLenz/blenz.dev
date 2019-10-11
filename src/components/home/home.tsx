import React from 'react';
import {
    Box,
    Container,
} from '@material-ui/core';

import {
    Header,
    Footer,
} from '../shared';
import {
    ISection,
    content,
} from '../../util';
import { Intro } from '.';

export const Home = () => {
    return (
        <>
            <Header/>
            <Container maxWidth='lg'>
                <Intro/>
                {
                    content.map((item: ISection) => {
                        return (
                            <Box
                                key={content.indexOf(item)}
                                minHeight='100vh'
                                id={item.link}
                            >
                                {
                                    item.element(item)
                                }
                            </Box>
                        );
                    })
                }
            </Container>
            <Footer/>
        </>
    );
};
