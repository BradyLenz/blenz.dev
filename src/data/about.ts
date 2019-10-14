import * as portrait from '../assets/portrait.jpg';

export interface IAbout {
    summary: string;
    skillsHeader: string;
    skills: string[];
    image: string;
}

export const aboutData: IAbout = {
    summary: 'Placeholder summary',
    skillsHeader: 'Here are some technologies I am familar with:',
    skills: [
        'React',
        'Redux',
        'Python',
        'SQL',
        'NoSQL',
    ],
    image: portrait.default,
};
