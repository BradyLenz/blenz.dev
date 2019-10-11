interface IGlobals {
    greeting: string;
    name: string;
    description: string;
    github: string;
    linkedin: string;
}

export const globals: IGlobals = {
    greeting: 'Hi, my name is',
    name: 'Brady Lenz',
    description: `
    I am a software engineer from Madison, WI with particular interests
    in machine learning and optimization.
    `,
    github: 'https://github.com/bradylenz',
    linkedin: 'https://www.linkedin.com/in/brlenz/',
};
