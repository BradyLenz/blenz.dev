import React from 'react';
import {
    Grid,
    Button,
} from '@material-ui/core';
import {
    makeStyles,
} from '@material-ui/styles';
import { Link } from 'react-router-dom';

import { content } from '../../../util/data';

const useStyles = makeStyles({
    root: {
        height: 'inherit',
    },
});

export const HeaderWeb = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify='center'
            alignItems='center'
            className={classes.root}
            spacing={4}
        >
            {
                content.map((item) => {
                    return (
                        <Grid
                            key={content.indexOf(item)}
                            item
                        >
                            <Button
                                variant='outlined'
                                component={Link}
                                to={`#${item.link}`}
                            >
                                {item.headerContent}
                            </Button>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
};
