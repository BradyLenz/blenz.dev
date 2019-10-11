import React from 'react';
import {
    Typography,
    Grid,
} from '@material-ui/core';

import { ISection } from '../../util/data';

export const About = (props: ISection) => {
    return (
        <Grid
            container
            justify='center'
        >
            <Grid item>
                <Typography variant='h2' noWrap>
                    {props.title}
                </Typography>
            </Grid>
        </Grid>
    );
};
