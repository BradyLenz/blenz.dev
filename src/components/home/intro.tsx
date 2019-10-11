import React from 'react';
import {
    createStyles,
    makeStyles,
    Typography,
    Grid,
    IconButton,
    Link,
    Toolbar,
} from '@material-ui/core';

import { globals } from '../../util';
import {
    GitHub,
    LinkedIn,
} from '../shared/icons';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        minHeight: '100vh',
        marginTop: -64,
        paddingTop: 64,
    },
    greeting: {
        color: theme.palette.text.secondary,
        paddingTop: 20,
    },
    name: {
        color: theme.palette.text.primary,
        paddingTop: 10,
    },
    description: {
        maxWidth: 450,
        margin: 'auto',
        paddingTop: 20,
        marginBottom: 100,
    },
    iconButton: {
        width: '100px',
        height: '100px',
    },
}));

interface IProps {
    toolbar: any;
    height?: number;
}

export const Intro = () => {
    const classes = useStyles();

    return (
        <>
            <Toolbar/>
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
        </>
    );
};
