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
    ImageButton,
} from '../shared';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        width: '100%',
    },
    container: {
        width: '100%',
    },
    item: {
        width: '100%',
        marginTop: 30,
    },
    image: {
        width: '100%',
        height: '100%',
        maxWidth: 300,
        maxHeight: 300,
    },
    content: {
        paddingTop: 20,
    },
    contentContainer: {
        padding: 32,
    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: 500,
        marginTop: 50,
    },
    contentHeader: {
        color: theme.palette.primary.main,
        fontWeight: 500,
    },
    location: {
        marginBottom: 10,
    },
    row: {
        paddingTop: 10,
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
                <Grid
                    container
                    alignItems='center'
                    wrap='nowrap'
                    direction='column'
                    className={classes.container}
                >
                    {
                        experienceData.experiences.map((experience, index) => {
                            return (
                                <Grid item key={index} className={classes.item}>
                                    <ExperienceItem {...experience} index={index}/>
                                </Grid>
                            );
                        })
                    }
                </Grid>
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
                    <ImageButton
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
        <>
            <Typography
                variant='h4'
                align='center'
                className={classes.title}
            >
                {props.title}
            </Typography>
            <Grid
                container
                justify='center'
                alignItems='center'
                direction={(props.index % 2 !== 0) ? 'row' : 'row-reverse'}
                className={classes.row}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <PictureContainer {...props}/>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    className={classes.content}
                >
                    <Paper
                        className={classes.contentContainer}
                        elevation={8}
                    >
                        <Typography
                            variant='h6'
                            className={classes.contentHeader}
                        >
                            {props.position}
                        </Typography>
                        <Typography
                            variant='h6'
                        >
                            {props.duration}
                        </Typography>
                        <Typography
                            variant='h6'
                            className={classes.location}
                        >
                            {props.location}
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
        </>
    );
};
