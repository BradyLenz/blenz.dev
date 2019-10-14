import uw from '../assets/experience/uw.svg';
import qgenda from '../assets/experience/qgenda.svg';
import tds from '../assets/experience/tds.svg';
import * as madhacks from '../assets/experience/madhacks.png';

export interface IExperience {
    title: string;
    link: string;
    position?: string;
    duration: string;
    details: string[];
    image?: string;
}

export const experienceData: IExperience[] = [
    {
        title: 'MadHacks Carbon',
        link: 'https://www.madhacks.io/#/',
        duration: 'October 19-20 2019',
        details: [
            'placeholder',
        ],
        image: madhacks.default,
    },
    {
        title: 'University of Wisconsin-Madison',
        link: 'https://www.wisc.edu/',
        duration: 'September 2019 - Present',
        details: [
            'B.S. in Computer Science and Mathematics',
            'Involvement in Transcend UW, MadHacks, and Club Wrestling',
        ],
        image: uw,
    },
    {
        title: 'TDS Telecom',
        link: 'https://tdstelecom.com/',
        position: 'Intern (Application Management and Development)',
        duration: 'April 2018 - Present',
        details: [
            'Worked with Python, Go, Django, Flask, Couchbase',
            'Developed a set of services to help with outage detection',
        ],
        image: tds,
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
        image: qgenda,
    },
];
