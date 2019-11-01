import React from 'react';
import ReactGA from 'react-ga';
import {
    Grid,
    makeStyles,
    createStyles,
    Typography,
    Box,
    Link,
    Paper,
} from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';

import {
    experienceData,
    IExperience,
} from '../../data';

import {
    SuperCenter,
    HeaderHR,
} from '../shared';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginTop: 50,
    },
    image: {
        width: '100%',
        height: '100%',
        maxWidth: 300,
        maxHeight: 300,
    },
    content: {
        paddingTop: 20,
        paddingLeft: 20,
    },
    contentContainer: {
        padding: 32,
    },
    row: {
        marginTop: 20,
    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: 500,
    },
    duration: {
        marginBottom: 10,
    },
}));

const logImageButtonClick = (name: string) => {
    return () => {
        ReactGA.event({
            category: 'ImageButton',
            action: `Click: ${name}`,
            label: 'Experience',
        });
    };
};

interface IExperienceProps extends IExperience {
    index: number;
}

export const Experience = () => {
    const classes = useStyles();

    return (
        <SuperCenter>
            <HeaderHR text={experienceData.header}/>
            <Box className={classes.root}>
                {
                    experienceData.experiences.map((experience, index) => {
                        return (
                            <ExperienceItem key={index} {...experience} index={index}/>
                        );
                    })
                }
            </Box>
        </SuperCenter>
    );
};

const PictureContainer = (props: IExperience) => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify='center'
        >
            <Grid item>
                <Link
                    href={props.link}
                    target='_blank'
                    onClick={logImageButtonClick(props.title)}
                >
                    <img
                        src={props.image.src}
                        alt={props.image.alt}
                        className={classes.image}
                    />
                </Link>
            </Grid>
        </Grid>
    );
};

const ExperienceItem = (props: IExperienceProps) => {
    const classes = useStyles();

    return (
        <Grid
            container
            justify='center'
            alignItems='center'
            className={classes.row}
            direction={(props.index % 2 !== 0) ? 'row' : 'row-reverse'}
            spacing={10}
        >
            <Grid
                item
                xs={12}
                md={6}
            >
                <PictureContainer {...props}/>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                className={classes.content}
            >
                <Paper
                    className={classes.contentContainer}
                    elevation={8}
                >
                    <Typography
                        variant='h5'
                        className={classes.title}
                    >
                        {props.title}
                    </Typography>
                    <Typography variant='h6'>
                        {props.position}
                    </Typography>
                    <Typography
                        variant='h6'
                        className={classes.duration}
                    >
                        {props.duration}
                    </Typography>
                    {
                        props.details.map((detail, index) => {
                            return (
                                <Grid
                                    container
                                    wrap='nowrap'
                                    key={index}
                                >
                                    <Grid item>
                                        <ArrowRight/>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='body1'>
                                            {detail}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            );
                        })
                    }
                </Paper>
            </Grid>
        </Grid>
    );
};
