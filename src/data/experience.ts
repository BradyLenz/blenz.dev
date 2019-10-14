import uw from '../assets/experience/uw.svg';
import * as qgenda from '../assets/experience/qgenda.png';
import tds from '../assets/experience/tds.svg';
import * as madhacks from '../assets/experience/madhacks.png';

export interface IExperienceData {
    header: string;
    experiences: IExperience[];
}

export interface IExperience {
    title: string;
    link: string;
    position?: string;
    duration: string;
    details: string[];
    image: IImage;
}

interface IImage {
    src: string;
    alt: string;
}

export const experienceData: IExperienceData = {
    header: 'Experience',
    experiences: [
        {
            title: 'University of Wisconsin-Madison',
            link: 'https://www.wisc.edu/',
            duration: 'September 2016 - Present',
            details: [
                'B.S. in Computer Science and Mathematics',
                'Involvement in Transcend UW, MadHacks, and Club Wrestling',
            ],
            image: {
                src: uw,
                alt: 'UW-Madison',
            },
        },
        {
            title: 'TDS Telecom',
            link: 'https://tdstelecom.com/',
            position: 'Intern (Application Management and Development)',
            duration: 'April 2018 - Present',
            details: [
                'Worked with Python, Go, Django, Flask, Couchbase',
                'Developed a pair of services to aid in outage detection',
            ],
            image: {
                src: tds,
                alt: 'TDS Telecom',
            },
        },
        {
            title: 'MadHacks Carbon',
            link: 'https://www.madhacks.io/#/',
            duration: 'October 19-20 2019',
            details: [
                'UW-Madison hackathon with emphasis on sustainable living',
            ],
            image: {
                src: madhacks.default,
                alt: 'MadHacks',
            },
        },
        {
            title: 'QGenda',
            link: 'https://www.qgenda.com',
            position: 'Product Development Intern',
            duration: 'Summer 2019',
            details: [
                'Worked with Typescript, C#, React, Redux, LINQ',
                'Agile development process',
            ],
            image: {
                src: qgenda.default,
                alt: 'QGenda',
            },
        },
    ],
};
