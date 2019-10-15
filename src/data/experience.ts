import * as qgenda from '../assets/experience/qgenda.png';
import * as sudox from '../assets/experience/sudox.png';
import * as madhacks from '../assets/experience/madhacks.png';
import * as recwell from '../assets/experience/recwell.png';
import uw from '../assets/experience/uw.svg';
import tds from '../assets/experience/tds.svg';

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
            title: 'Sudo.X',
            link: 'https://www.linkedin.com/company/sudo.x/about/',
            position: 'Co-Founder',
            duration: 'April 2017 - Present',
            details: [
                'A playground for software ideas',
                'Utilized with many modern technologies such as Python, Typescript, Angular, React, and Node.js',
                'Worked in a small team exploring software solutions targetting the Transcend UW competition',
            ],
            image: {
                src: sudox.default,
                alt: 'Sudo.X',
            },
        },
        {
            title: 'TDS Telecom',
            link: 'https://tdstelecom.com/',
            position: 'Intern (Application Management and Development)',
            duration: 'April 2018 - Present',
            details: [
                'Worked extensively with Python, Django, and Flask',
                'Gained experience working with Go, and Couchbase',
                'Developed a pair of services to aid in outage detection',
            ],
            image: {
                src: tds,
                alt: 'TDS Telecom',
            },
        },
        {
            title: 'UW-Madison RecWell',
            link: 'https://recwell.wisc.edu',
            position: 'Facility Supervisor',
            duration: 'November 2017 - Present',
            details: [
                'Gained valuable leadership skils from overseeing student employee on shift',
                'Handled member-service related interactions and decisions',
            ],
            image: {
                src: recwell.default,
                alt: 'RecWell',
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
                'Developed code in Typescript, C#, React, Redux, LINQ',
                'Worked in an agile development team',
            ],
            image: {
                src: qgenda.default,
                alt: 'QGenda',
            },
        },
    ],
};
