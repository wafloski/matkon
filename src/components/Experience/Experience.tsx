import { SectionTitle } from "../Common/Common.ts";

interface Job {
    company: string;
    end: string;
    start: string;
    responsibilities: string[];
    position: string;
}

interface ExperienceProps {
    content: Job[]
}

const Experience = ({ content }: ExperienceProps) => {
    return (
        <>
            <SectionTitle>My Resume</SectionTitle>
            <ul>
                {content?.map((item, index) => (
                    <li key={index}>
                        <h2>{item.company}</h2>
                        <p>{item.position}</p>
                        <p>{item.start}</p>
                        <p>{item.responsibilities}</p>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default Experience;