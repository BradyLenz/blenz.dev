export interface IProjectData {
    header: string;
    projects: IProject[];
}

export interface IProject {
    header: string;
    title: string;
    description: string;
    image: string;
}

export const projectData: IProjectData = {
    header: 'Featured Projects',
    projects: [
        {
            header: 'Featured Projects',
            title: 'blenz.dev',
            description: 'Personal site',
            image: '',
        },
    ],
};
