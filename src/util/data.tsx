import React from 'react';

import {
    About,
    Contact,
    Experience,
    Projects,
} from '../components/home';

export interface ISection {
    title: string;
    headerContent: string;
    link: string;
    element: (props: ISection) => React.ReactElement;
}

export const content: ISection[] = [
    {
        title: 'About Me',
        headerContent: 'About',
        link: 'about',
        element: (props: ISection) => <About {...props}/>,
    },
    {
        title: 'Work Experience',
        headerContent: 'Experience',
        link: 'experience',
        element: (props: ISection) => <Experience {...props}/>,
    },
    {
        title: 'Projects',
        headerContent: 'Projects',
        link: 'projects',
        element: (props: ISection) => <Projects {...props}/>,
    },
    {
        title: 'Contact Me',
        headerContent: 'Contact',
        link: 'contact',
        element: (props: ISection) => <Contact {...props}/>,
    },
];
