import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        height: 'inherit',
    },
});

export const HeaderMobile = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify='flex-end'
            alignItems='center'
            className={classes.root}
        >
            <Grid item>
                temporary content
            </Grid>
        </Grid>
    );
};
