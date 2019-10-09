import React from 'react';

export interface ISection {
    title: string;
    headerContent: string;
    link: string;
    element?: () => React.ReactElement;
}

export const content: ISection[] = [
    {
        title: 'About Me',
        headerContent: 'About',
        link: 'about',
    },
    {
        title: 'Work Experience',
        headerContent: 'Experience',
        link: 'experience',
    },
    {
        title: 'Projects',
        headerContent: 'Projects',
        link: 'projects',
    },
    {
        title: 'Contact',
        headerContent: 'Contact',
        link: 'contact',
    },
];
