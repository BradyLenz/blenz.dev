import React from 'react';
import {
    createStyles,
    makeStyles,
    Typography,
    Grid,
    IconButton,
    Link,
} from '@material-ui/core';

import { globals } from '../../util';
import {
    GitHub,
    LinkedIn,
} from '../shared/icons';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        height: 'inherit',
    },
    greeting: {
        color: theme.palette.text.secondary,
        marginBottom: 10,
    },
    name: {
        color: theme.palette.text.primary,
        marginBottom: 20,
    },
    description: {
        maxWidth: '450px',
        marginBottom: '100px',
    },
    iconButton: {
        width: '100px',
        height: '100px',
    }
}));

export const Intro = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify='center'
            alignItems='center'
            className={classes.root}
            direction='column'
        >
            <Grid item>
                <Typography
                    className={classes.greeting}
                    align='center'
                    variant='h4'
                >
                    {globals.greeting}
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    className={classes.name}
                    align='center'
                    variant='h1'
                >
                    {globals.name}
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    className={classes.description}
                    align='center'
                    variant='h6'
                >
                    {globals.description}
                </Typography>
            </Grid>
            <Grid item>
                <Grid
                    container
                    spacing={8}
                >
                    <IconButton
                        component={Link}
                        href={globals.github}
                        target='_blank'
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
                    >
                        <LinkedIn
                            color='primary'
                            className={classes.iconButton}
                        />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
};
