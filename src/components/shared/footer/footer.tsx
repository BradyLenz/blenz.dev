import React from 'react';
import {
    Grid,
    makeStyles,
    IconButton,
    createStyles,
    Typography,
    Link,
} from '@material-ui/core';

import { globals } from '../../../data';
import {
    GitHub,
    LinkedIn,
} from '../../shared/icons';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        height: 64,
        background: theme.palette.primary.main,
    },
}));

const onClickLinkedIn = () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'LinkedIn',
        eventAction: 'click',
        eventLabel: 'Footer',
    });
};

const onClickGitHub = () => {
    ga('send', {
        hitType: 'event',
        eventCategory: 'GitHub',
        eventAction: 'click',
        eventLabel: 'Footer',
    });
};

export const Footer = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify='center'
            alignItems='center'
            alignContent='center'
            direction='column'
            className={classes.root}
        >
            <Grid item>
                <Grid
                    container
                    justify='center'
                >
                    <Grid item>
                        <IconButton
                            size='small'
                            component={Link}
                            href={globals.linkedin}
                            target='_blank'
                            onClick={onClickGitHub}
                        >
                            <GitHub color='secondary'/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            size='small'
                            component={Link}
                            href={globals.linkedin}
                            target='_blank'
                            onClick={onClickLinkedIn}
                        >
                            <LinkedIn color='secondary'/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography
                    color='secondary'
                    variant='body1'
                >
                    {globals.name}
                </Typography>
            </Grid>
        </Grid>
    );
};
