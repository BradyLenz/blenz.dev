import React from 'react';
import {
    Typography,
    Button,
    makeStyles,
    Grid,
    Link,
} from '@material-ui/core';

import { contactData } from '../../data';
import {
    SuperCenter,
    HeaderHR,
} from '../shared';

const useStyles = makeStyles({
    message: {
        marginTop: 40,
        maxWidth: 450,
        marginBottom: 40,
        margin: 'auto',
    },
    emailButton: {
        margin: 'auto',
    },
});

export const Contact = () => {
    const classes = useStyles();

    return (
        <SuperCenter>
            <HeaderHR text={contactData.header}/>
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
                    <Link
                        href={contactData.button.link}
                        target='_blank'
                    >
                        <Button
                            variant='contained'
                            size='large'
                            color='primary'
                            className={classes.emailButton}
                        >
                            {contactData.button.text}
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </SuperCenter>
    );
};
