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

const API_URL = 'http://localhost:1337';

const GRAPHQL_URL = 'https://mkapi.dkonto.pl/graphql';

export const fetchPosts = async () => {
    const query = `
    query GetPosts {
      posts {
        nodes {
          id
          title
          content
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
                // 'Authorization': `Bearer ${token}`
            },
        });

        return response.data.data.posts.nodes;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    },
});

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

const fetchPersonalData = async () => {
    try {
        const response = await instance.get(`${API_URL}/api/personals?populate=*`, {
            params: {
                populate: {
                    '*': true,
                    Skills,
                    Education,
                    Interests,
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
                const posts = await fetchPosts();
                setPosts(posts);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    // useEffect(() => {
    //     const getPersonalData = async () => {
    //         try {
    //             const data = await fetchPersonalData();
    //             setData(data);
    //         } catch (error) {
    //             setError('Error fetching articles');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //
    //     getPersonalData();
    // }, []);
    //
    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    //
    // if (error) {
    //     return <div>{error}</div>;
    // }

    return (
        <>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            ))}
            <GlobalStyles />
            <Header />
            {/*<Intro title={data?.Title} subtitle={data?.Subtitle}/>*/}
            {/*<SectionContainer id='about'>*/}
            {/*    <AboutMe title={data?.Title} content={data?.Resume}/>*/}
            {/*</SectionContainer>*/}
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
