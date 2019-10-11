import React from 'react';
import {
    Box,
    Container,
} from '@material-ui/core';

import { Header } from '../shared/header';
import { Footer } from '../shared/footer';
import { Intro } from './intro';
import {
    ISection,
    content,
} from '../../util/data';

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
