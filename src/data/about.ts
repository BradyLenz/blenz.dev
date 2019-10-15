import * as portrait from '../assets/portrait.jpg';

export interface IAbout {
    header: string;
    skills: string[];
    image: IImage;
    button: IButton;
}

interface IImage {
    src: string;
    alt: string;
}

interface IButton {
    text: string;
    link: string;
}

export const aboutData: IAbout = {
    header: 'About Me',
    skills: [
        'Python',
        'Typescript',
        'C#',
        'Java',
        'React',
        'Redux',
        'SQL',
        'Couchbase',
    ],
    image: {
        src: portrait.default,
        alt: 'Portrait',
    },
    button: {
        text: 'View Resume',
        link: '',
    },
};
