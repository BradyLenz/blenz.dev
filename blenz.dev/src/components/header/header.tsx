import React from 'react';
import {
    AppBar,
    useScrollTrigger,
    Slide,
    Hidden,
    Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { HeaderMobile } from './header-mobile';
import { HeaderWeb } from './header-web';

const useStyles = makeStyles({
    root: {
        height: '48px',
        background: 'transparent',
    },
});

interface IProps {
    children: React.ReactElement;
}

const ScrollBehavior = (props: IProps) => {
    const { children } = props;
    const slideTrigger = useScrollTrigger();
    const elevationTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return (
        <Slide
            appear={false}
            direction='down'
            in={!slideTrigger}
        >
            {
                React.cloneElement(children, {
                    elevation: elevationTrigger ? 4 : 0,
                })
            }
        </Slide>
    );
};

export const Header = () => {
    const classes = useStyles();

    return (
        <ScrollBehavior>
            <AppBar className={classes.root}>
                <Hidden xsDown>
                    <Box height='inherit'>
                        <HeaderWeb/>
                    </Box>
                </Hidden>
                <Hidden smUp>
                    <Box height='inherit'>
                        <HeaderMobile/>
                    </Box>
                </Hidden>
            </AppBar>
        </ScrollBehavior>
    );
};
