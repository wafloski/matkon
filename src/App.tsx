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

import {
  SectionContainer,
  LoaderContainer,
  Loader,
} from './components/Common/Common.ts';

import { findContentByTitle } from './helpers/helpers.tsx';

const fetchData = async () => {
  const query = `
        query NewQuery {
            posts {
                nodes {
                    content
                    title
                }
            }
            educations {
                nodes {
                    educationItem {
                        years
                        school
                        course
                    }
                }
            }
            skills(first: 20, where: {orderby: {field: MODIFIED, order: ASC}}) {
                nodes {
                    title
                }
            }
            interests(where: {orderby: {field: MODIFIED, order: ASC}}) {
                nodes {
                    title
                }
            }
            experiences(where: {orderby: {field: MODIFIED, order: ASC}}) {
                nodes {
                    experienceItem {
                        company
                        enddate
                        position
                        startdate
                        responsibility
                        logourl
                        companyurl
                    }
                }
            }
        }
    `;

  try {
    const response = await axios.post(
      import.meta.env.VITE_API_URL,
      {
        query,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const App = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await fetchData();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        if (error) {
          console.log(error);
        }
        setLoading(false);
      }
    };

    getData();
  }, []);

  const title: string = findContentByTitle(data, 'Title');
  const subtitle: string = findContentByTitle(data, 'Subtitle');
  const resume: string = findContentByTitle(data, 'Resume');
  const email: string = findContentByTitle(data, 'Email');
  const location: string = findContentByTitle(data, 'Location');
  const phone: string = findContentByTitle(data, 'Phone');
  const footer: string = findContentByTitle(data, 'Footer');
  const education = data?.educations?.nodes;
  const skills = data?.skills?.nodes;
  const interests = data?.interests?.nodes;
  const experience = data?.experiences?.nodes;

  return (
    <>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <>
          <GlobalStyles />
          <Header />
          <Intro title={title} subtitle={subtitle} />
          <SectionContainer id="about">
            <AboutMe title={title} content={resume} />
          </SectionContainer>
          <SectionContainer id="resume">
            <Experience content={experience} />
          </SectionContainer>
          <SectionContainer id="skills">
            <Skills content={skills} />
          </SectionContainer>
          <SectionContainer id="educations">
            <Education content={education} />
          </SectionContainer>
          <SectionContainer id="interests">
            <Interests content={interests} />
          </SectionContainer>
          <SectionContainer id="contact">
            <Contact mail={email} location={location} phone={phone} />
          </SectionContainer>
          <Footer content={footer} />
        </>
      )}
    </>
  );
};

export default App;
