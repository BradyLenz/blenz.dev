import React from 'react';

import { ISection } from '../../util';
import {
    SuperCenter,
    HeaderHR,
} from '../shared';

export const Experience = (props: ISection) => {
    return (
        <SuperCenter>
            <HeaderHR text={props.title}/>
        </SuperCenter>
    );
};
