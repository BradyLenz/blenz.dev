import React from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActionArea,
    CardActions,
    Grid,
    Typography,
    makeStyles,
    createStyles,
} from '@material-ui/core';

import { projectData } from '../../data';
import {
    SuperCenter,
    HeaderHR,
} from '../shared';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginTop: 40,
    },
    card: {
        minHeight: 300,
    },
    header: {
        color: theme.palette.primary.main,
    },
    skills: {
        marginLeft: 8,
        color: theme.palette.text.hint,
    },
}));

const navigate = (link: string) => {
    return () => {
        window.open(link, '_blank');
    };
};

export const Projects = () => {
    const classes = useStyles();

    return (
        <SuperCenter>
            <HeaderHR text={projectData.header}/>
            <Grid
                container
                justify='center'
                className={classes.root}
            >
                {
                    projectData.projects.map((project, index) => {
                        return (
                            <Grid
                                item
                                key={index}
                                xs={10}
                                md={6}
                            >
                                <Card
                                    className={classes.card}
                                >
                                    <CardActionArea onClick={navigate(project.link)}>
                                        <CardMedia
                                            component='img'
                                            image={project.image.src}
                                            title={project.image.alt}
                                        />
                                        <CardHeader
                                            title={project.title}
                                            className={classes.header}
                                        />
                                        <CardContent>
                                            <Typography variant='body1'>
                                                {project.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Grid
                                            container
                                            spacing={4}
                                        >
                                            {
                                                project.skills.map((skill, j) => {
                                                    return (
                                                        <Grid
                                                            item
                                                            key={j}
                                                        >
                                                            <Typography
                                                                variant='body1'
                                                                className={classes.skills}
                                                            >
                                                                {skill}
                                                            </Typography>
                                                        </Grid>
                                                    );
                                                })
                                            }
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </SuperCenter>
    );
};
