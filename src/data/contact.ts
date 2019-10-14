export interface IContact {
    message: string;
    button: IButton;
}

export interface IButton {
    text: string;
    link: string;
}

export const contactData: IContact = {
    message: `
        I am currently looking for a full-time position as a Software Engineer.
        Feel free to contact me via email or LinkedIn.
    `,
    button: {
        text: 'Email Me',
        link: 'mailto:bradylenz98@gmail.com',
    },
};
