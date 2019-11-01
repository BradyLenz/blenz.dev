import React from 'react';
import ReactGA from 'react-ga';
import {
    Grid,
    Button,
} from '@material-ui/core';
import {
    makeStyles,
} from '@material-ui/styles';
import { Link } from 'react-scroll';

import { content } from '../../../data/home';

const useStyles = makeStyles({
    button: {
        width: 130,
    },
    active: {
        fontWeight: 'bolder',
    },
});

const logButtonClick = (name: string) => {
    return () => {
        ReactGA.event({
            category: 'Button',
            action: `Click: ${name}`,
            label: 'Header',
        });
    };
};

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
                                duration={500}
                                spy={true}
                                hashSpy={true}
                                to={item.link}
                                activeClass={classes.active}
                                className={classes.button}
                                onClick={logButtonClick(item.headerContent)}
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
