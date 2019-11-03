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
    location: string;
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
            location: 'Madison, WI',
        },
        {
            title: 'Sudo.X',
            link: 'https://www.linkedin.com/company/sudo.x/about/',
            position: 'Co-Founder',
            duration: 'April 2017 - Present',
            details: [
                'A playground for software ideas',
                'Utilized with many modern technologies such as Python, Typescript, Angular, React, and Node.js',
                'Worked in a small team exploring software solutions targeting the Transcend UW competition',
            ],
            image: {
                src: sudox.default,
                alt: 'Sudo.X',
            },
            location: 'Madison, WI',
        },
        {
            title: 'TDS Telecom',
            link: 'https://tdstelecom.com/',
            position: 'Intern (Application Management and Development)',
            duration: 'April 2018 - Present',
            details: [
                'Worked extensively with Python, Django, and Flask',
                'Gained experience working with Go and Couchbase',
                'Developed a pair of services to aid in outage detection',
            ],
            image: {
                src: tds,
                alt: 'TDS Telecom',
            },
            location: 'Madison, WI',
        },
        {
            title: 'UW-Madison RecWell',
            link: 'https://recwell.wisc.edu',
            position: 'Facility Supervisor',
            duration: 'November 2017 - Present',
            details: [
                'Gained valuable leadership skills from overseeing student employees on shift',
                'Handled member-service related interactions and decisions',
            ],
            image: {
                src: recwell.default,
                alt: 'RecWell',
            },
            location: 'Madison, WI',
        },
        {
            title: 'MadHacks Carbon',
            link: 'https://www.madhacks.io/#/',
            duration: 'October 19-20 2019',
            details: [
                'UW-Madison hackathon with emphasis on sustainable living',
                'Worked in a team of two to develop a full cloud app in less than 24 hours',
            ],
            image: {
                src: madhacks.default,
                alt: 'MadHacks',
            },
            location: 'Madison, WI',
        },
        {
            title: 'QGenda',
            link: 'https://www.qgenda.com',
            position: 'Product Development Intern',
            duration: 'Summer 2019',
            details: [
                'Worked on a team of developers following agile devlopment practices',
                'Developed and maintained code for various aspects of the QGenda dashboard',
                'Utilized Typescript, React, Reudx, C#, and LINQ for full-stack development',
            ],
            image: {
                src: qgenda.default,
                alt: 'QGenda',
            },
            location: 'Atlanta, GA',
        },
    ],
};
