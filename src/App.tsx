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
import { SectionContainer } from './components/Common/Common.ts';
import { AllData } from './types/types.ts';

const API_URL = 'http://localhost:1337';

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    },
});

const initialData = {
    Title: '',
    Subtitle: '',
    Resume: '',
    WorkExperience: [],
    Education: [],
    Skills: [],
    Footer: ''
};

const fetchPersonalData = async () => {
    try {
        const response = await instance.get(`${API_URL}/api/personals?populate=*`, {
            params: {
                populate: {
                    '*': true,
                    Skills,
                    Education,
                    WorkExperience: {
                        populate: {
                            Responsibilities: true
                        }
                    }
                }
            }
        });
        return response?.data.data[0]?.attributes;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
    }
};

const App = () => {
    const [data, setData] = useState<AllData>(initialData);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPersonalData = async () => {
            try {
                const data = await fetchPersonalData();
                setData(data);
            } catch (error) {
                setError('Error fetching articles');
            } finally {
                setLoading(false);
            }
        };

        getPersonalData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <GlobalStyles />
            <Header />
            <Intro title={data?.Title} subtitle={data?.Subtitle}/>
            <SectionContainer id='about'>
                <AboutMe title={data?.Title} content={data?.Resume}/>
            </SectionContainer>
            <SectionContainer id='resume'>
                <Experience content={data?.WorkExperience}/>
            </SectionContainer>
            <SectionContainer id='skills'>
                <Skills content={data?.Skills}/>
            </SectionContainer>
            <SectionContainer id='skills'>
                <Education content={data?.Education}/>
            </SectionContainer>
            <Footer content={data?.Footer}/>
        </>
    );
};

export default App;
