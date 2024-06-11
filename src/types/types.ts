export interface School {
    id: number;
    Course: string;
    School: string;
    Years: string;
}

export interface Job {
    Company: string;
    End: string;
    Start: string;
    Responsibilities: string[];
    Position: string;
    LogoURL: string;
    WorkURL: string;
}

export interface Skill {
    id: number;
    Skill: string;
}

export interface AllData {
    Title: string;
    Subtitle: string;
    Resume: string;
    Experience: Job[],
    Education: School[],
    Skills: Skill[],
    Footer: string,
}