import React from 'react';
import {
    Box,
    Container,
    makeStyles,
} from '@material-ui/core';

import {
    Header,
    Footer,
} from '../shared';
import {
    ISection,
    content,
} from '../../data';
import { Intro } from '.';

const useStyles = makeStyles({
    fullWidth: {
        width: '100%',
    },
});

export const Home = () => {
    const classes = useStyles();

    return (
        <>
            <Header/>
                <Intro/>
                {
                    content.map((item: ISection, index: number) => {
                        return (
                                <Box
                                    minHeight='100vh'
                                    id={item.link}
                                    bgcolor={(index % 2 !== 0) ? undefined : '#a5b7bd'}
                                    key={index}
                                    className={classes.fullWidth}
                                >
                                    <Container maxWidth='lg'>
                                        {
                                            item.element(item)
                                        }
                                    </Container>
                                </Box>
                        );
                    })
                }
            <Footer/>
        </>
    );
};
