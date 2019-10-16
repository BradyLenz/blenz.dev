import React from 'react';
import {
    createStyles,
    makeStyles,
    Typography,
    Grid,
    IconButton,
    Link,
} from '@material-ui/core';

import { globals } from '../../data';
import {
    SuperCenter,
    GitHub,
    LinkedIn,
} from '../shared';

const useStyles = makeStyles((theme) => createStyles({
    greeting: {
        color: theme.palette.text.secondary,
        marginBottom: 10,
    },
    name: {
        color: theme.palette.text.primary,
        paddingBottom: 5,
        marginBottom: 20,
    },
    description: {
        maxWidth: 450,
        margin: 'auto',
        marginBottom: 100,
    },
    iconButton: {
        width: '100px',
        height: '100px',
    },
}));

const onClickLinkedIn = () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'LinkedIn',
        eventAction: 'click',
        eventLabel: 'Intro',
    });
};

const onClickGitHub = () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'GitHub',
        eventAction: 'click',
        eventLabel: 'Intro',
    });
};

export const Intro = () => {
    const classes = useStyles();

    return (
        <SuperCenter>
            <Typography
                className={classes.greeting}
                align='center'
                variant='h4'
            >
                {globals.greeting}
            </Typography>
            <Typography
                className={classes.name}
                align='center'
                variant='h1'
                noWrap
            >
                {globals.name}
            </Typography>
            <Typography
                className={classes.description}
                align='center'
                variant='h6'
            >
                {globals.description}
            </Typography>
            <Grid
                container
                justify='center'
                spacing={8}
            >
                <IconButton
                    component={Link}
                    href={globals.github}
                    target='_blank'
                    onClick={onClickGitHub}
                >
                    <GitHub
                        color='primary'
                        className={classes.iconButton}
                    />
                </IconButton>
                <IconButton
                    component={Link}
                    href={globals.linkedin}
                    target='_blank'
                    onClick={onClickLinkedIn}
                >
                    <LinkedIn
                        color='primary'
                        className={classes.iconButton}
                    />
                </IconButton>
            </Grid>
        </SuperCenter>
    );
};
