export interface School {
    id: number;
    Course: string;
    School: string;
    Years: string;
}

export interface Responsibility {
    id: number;
    Duty: string;
}

export interface Job {
    id: number;
    Company: string;
    End: string;
    Start: string;
    Responsibilities: Responsibility[];
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
    WorkExperience: Job[],
    Education: School[],
    Skills: Skill[],
    Footer: string,
}