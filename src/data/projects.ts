import * as site from '../assets/projects/blenz.dev.png';
import { globals } from './globals';

export interface IProjectData {
    header: string;
    projects: IProject[];
}

export interface IProject {
    title: string;
    description: string;
    link: string;
    image: Image;
    skills: string[];
}

interface Image {
    src: string;
    alt: string;
}

export const projectData: IProjectData = {
    header: 'Featured Projects',
    projects: [
        {
            title: 'blenz.dev',
            description: 'Personal website built using react and hosted on Google Firebase',
            link: `${globals.github}/blenz.dev`,
            image: {
                src: site.default,
                alt: 'blenz.dev',
            },
            skills: [
                'Typescript',
                'React',
            ],
        },
    ],
};
