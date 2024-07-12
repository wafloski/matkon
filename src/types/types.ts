export interface School {
    course: string;
    school: string;
    years: string;
}

export interface EducationEntry {
    educationItem: School;
}

export interface Job {
    company: string;
    enddate: string;
    startdate: string;
    responsibility: string;
    position: string;
    logourl: string;
    companyurl: string;
}

export interface ExperienceEntry {
    experienceItem: Job;
}

export interface Skill {
    title: string;
}

export interface Interest {
    title: string;
}

export interface AllData {
    Title: string;
    Subtitle: string;
    Resume: string;
    WorkExperience: Job[];
    Education: School[];
    Skills: Skill[];
    Interests: Interest[];
    Location: string;
    Phone: string;
    Email: string;
    Footer: string;
}