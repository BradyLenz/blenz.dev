import React from 'react';
import {
    Grid,
    makeStyles,
    IconButton,
    createStyles,
    Typography,
    Link,
} from '@material-ui/core';

import { globals } from '../../../util';
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
