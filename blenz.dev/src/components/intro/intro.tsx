import React from 'react';
import { Parallax } from 'react-parallax';
import {
    Box,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    imageText: {
        color: 'white',
        padding: 20,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
    },
});

export const Intro = () => {
    const classes = useStyles();

    return (
        <Parallax
                bgImage={require('../../assets/images/temp.jpg')}
                bgImageAlt='captital'
                strength={200}
        >
            <Box height='100vh'>
                <Typography
                    align='center'
                    variant='h1'
                    className={classes.imageText}
                >
                    Brady Lenz
                </Typography>
            </Box>
        </Parallax>
    );
};
