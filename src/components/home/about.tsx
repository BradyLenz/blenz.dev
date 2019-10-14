import React from 'react';
import {
    Grid,
    Typography,
    makeStyles,
    createStyles,
    Link,
    Button,
} from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';

import { aboutData } from '../../data';
import {
    SuperCenter,
    HeaderHR,
} from '../shared';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginTop: 50,
    },
    image: {
        marginLeft: 100,
        [theme.breakpoints.down('sm')]: {
            margin: '0px auto',
        },
        borderRadius: 10,
        maxWidth: 300,
        maxHeight: 300,
    },
    content: {
        maxWidth: 500,
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
    },
    lineSpace: {
        marginTop: '1em',
    },
}));

export const About = () => {
    const classes = useStyles();

    return (
        <SuperCenter>
            <HeaderHR text={aboutData.header}/>
            <Grid
                container
                justify='center'
                className={classes.root}
            >
                <Grid
                    item
                    xs={12}
                    sm={8}
                    className={classes.content}
                >
                    <Typography variant='body1'>
                        I'm a software engineer from Madison, WI.
                    </Typography>
                    <Typography
                        variant='body1'
                        className={classes.lineSpace}
                    >
                        I will be graduation from the
                        &nbsp;
                        <Link href='https://wisc.edu' target='_blank'>
                            University of Wisconsin - Madison
                        </Link>
                        &nbsp;
                            in December 2019 with a degree in Computer Science and in Mathematics
                    </Typography>
                    <Typography variant='body1' className={classes.lineSpace}>
                        Here are some technologies I'm familiar with:
                    </Typography>
                    <Grid
                        container
                        justify='center'
                    >
                        {
                            aboutData.skills.map((skill, index) => {
                                return (
                                    <Grid
                                        key={index}
                                        item
                                        xs={6}
                                    >
                                        <Grid container>
                                            <Grid item>
                                                <ArrowRight/>
                                            </Grid>
                                            <Grid item>
                                                {skill}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                );
                            })
                        }
                    </Grid>
                    <Grid
                        container
                        justify='center'
                    >
                        <Grid item>
                            <Button
                                variant='contained'
                                color='primary'
                                className={classes.button}
                            >
                                {aboutData.button.text}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={4}
                >
                    <Grid
                        container
                        justify='center'
                    >
                        <img
                            src={aboutData.image.src}
                            alt={aboutData.image.alt}
                            className={classes.image}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </SuperCenter>
    );
};
