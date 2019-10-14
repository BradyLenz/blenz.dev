import React from 'react';
import {
    makeStyles,
    Grid,
} from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
    },
});

interface IProps extends GridProps {
    children: React.ReactElement | React.ReactElement[];
}

export const SuperCenter = (props: IProps) => {
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
                {props.children}
            </Grid>
        </Grid>
    );
};
