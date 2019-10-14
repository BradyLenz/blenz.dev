import React from 'react';
import {
    Typography,
    Button,
    makeStyles,
    Grid,
    Link,
} from '@material-ui/core';

import {
    ISection,
    contactData,
} from '../../data';
import {
    SuperCenter,
    HeaderHR,
} from '../shared';

const useStyles = makeStyles({
    title: {
        marginBottom: 40,
    },
    message: {
        maxWidth: 450,
        marginBottom: 40,
    },
    emailButton: {
        margin: 'auto',
    },
});

export const Contact = (props: ISection) => {
    const classes = useStyles();

    return (
        <SuperCenter>
            <HeaderHR
                text={props.title}
                className={classes.title}
            />
            <Typography
                align='center'
                className={classes.message}
            >
                {contactData.message}
            </Typography>
            <Grid
                container
                justify='center'
            >
                <Grid item>
                    <Button
                        variant='contained'
                        size='large'
                        color='primary'
                        className={classes.emailButton}
                    >
                        {contactData.button.text}
                    </Button>
                </Grid>
            </Grid>
        </SuperCenter>
    );
};
