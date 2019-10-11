import React from 'react';
import {
    makeStyles,
    Grid,
    Toolbar,
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
        // marginTop: -64,
        // paddingTop: 64,
    },
});

interface IProps {
    children: React.ReactElement | React.ReactElement[];
}

export const SuperCenter = (props: IProps) => {
    const classes = useStyles();

    return (
        <>
            {/*<Toolbar/>*/}
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
        </>
    );
};
