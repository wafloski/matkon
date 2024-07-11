import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header/Header.tsx';
import GlobalStyles from './components/GlobalStyles/GlobalStyles.ts';
import Intro from './components/Intro/Intro.tsx';
import AboutMe from './components/AboutMe/AboutMe.tsx';
import Experience from './components/Experience/Experience.tsx';
import Skills from './components/Skills/Skills.tsx';
import Education from './components/Education/Education.tsx';
import Footer from './components/Footer/Footer.tsx';
import Contact from './components/Contact/Contact.tsx';
import Interests from './components/Interests/Interests.tsx';

import { SectionContainer } from './components/Common/Common.ts';
import { AllData } from './types/types.ts';

import { findPostContentByTitle } from './helpers/helpers.tsx';

const API_URL = 'http://localhost:1337';

const GRAPHQL_URL = 'https://mkapi.dkonto.pl/graphql';

export const fetchData = async () => {
    const query = `
        query NewQuery {
            educations {
                nodes {
                    educationItem {
                        years
                        school
                        course
                    }
                }
            }
            posts {
                nodes {
                    content
                    title
                }
            }
        }
    `;

    try {
        const response = await axios.post(GRAPHQL_URL, {
            query,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

const initialData: AllData = {
    Title: '',
    Subtitle: '',
    Resume: '',
    WorkExperience: [],
    Education: [],
    Skills: [],
    Interests: [],
    Location: '',
    Phone: '',
    Email: '',
    Footer: ''
};

const App = () => {
    // const [data, setData] = useState<AllData>(initialData);
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                // const token = await getToken();
                const posts = await fetchData();
                console.log(posts);
                setPosts(posts);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    const title: string  = findPostContentByTitle(posts, 'Title');
    const subtitle: string  = findPostContentByTitle(posts, 'Subtitle');
    const resume: string  = findPostContentByTitle(posts, 'Resume');

    return (
        <>
            <GlobalStyles />
            <Header />
            <Intro title={title} subtitle={subtitle}/>
            <SectionContainer id='about'>
                <AboutMe title={title} content={resume}/>
            </SectionContainer>
            {/*<SectionContainer id='resume'>*/}
            {/*    <Experience content={data?.WorkExperience}/>*/}
            {/*</SectionContainer>*/}
            {/*<SectionContainer id='skills'>*/}
            {/*    <Skills content={data?.Skills}/>*/}
            {/*</SectionContainer>*/}
            {/*<SectionContainer id='skills'>*/}
            {/*    <Education content={data?.Education}/>*/}
            {/*</SectionContainer>*/}
            {/*<SectionContainer id='interests'>*/}
            {/*    <Interests content={data?.Interests}/>*/}
            {/*</SectionContainer>*/}
            {/*<SectionContainer id='contact'>*/}
            {/*    <Contact mail={data?.Email} location={data?.Location} phone={data?.Phone}/>*/}
            {/*</SectionContainer>*/}
            {/*<Footer content={data?.Footer}/>*/}
        </>
    );
};

export default App;
