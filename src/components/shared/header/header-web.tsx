import React from 'react';
import {
    Grid,
    Button,
} from '@material-ui/core';
import {
    makeStyles,
} from '@material-ui/styles';
import { Link } from 'react-scroll';

import { content } from '../../../util/data';

const useStyles = makeStyles({
    active: {
        fontWeight: 'bolder',
    },
});

export const HeaderWeb = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify='center'
            alignItems='center'
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
                                color='secondary'
                                component={Link}
                                smooth={true}
                                spy={true}
                                to={item.link}
                                activeClass={classes.active}
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
