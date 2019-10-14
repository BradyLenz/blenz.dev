import React from 'react';
import {
    Typography,
    makeStyles,
    createStyles,
} from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        color: theme.palette.text.primary,
    },
}));

interface IProps extends TypographyProps {
    text: string;
}

export const HeaderHR = (props: IProps) => {
    const classes = useStyles(props);

    return (
        <Typography
            variant='h2'
            align='center'
            className={classes.root}
            {...props}
        >
            {props.text}
        </Typography>
    );
};
