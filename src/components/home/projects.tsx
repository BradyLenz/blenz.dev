import React from 'react';

import { projectData } from '../../data';
import {
    SuperCenter,
    HeaderHR,
} from '../shared';

export const Projects = () => {
    return (
        <SuperCenter>
            <HeaderHR text={projectData.header}/>
        </SuperCenter>
    );
};
