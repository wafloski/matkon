import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from "./components/Header/Header.tsx";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles.ts";
import Intro from "./components/Intro/Intro.tsx";

const API_URL = 'http://localhost:1337';

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    },
});

const fetchPersonalData = async () => {
    try {
        const response = await instance.get(`${API_URL}/api/personals`);
        return response?.data.data[0]?.attributes;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
    }
};

const App = () => {
    const [data, setData] = useState<[]>([]);
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

    console.log(data);
    console.log(data?.Experience?.workExperience);

    return (
        <>
            <GlobalStyles />
            <Header />
            <Intro title={data?.Title} subtitle={data?.Subtitle}/>
            <div>
                <h3>{data?.Resume}</h3>
                <ul>
                    {data?.Experience?.workExperience?.map((item, index) => (
                        <li key={index}>
                            <h2>{item.company}</h2>
                            <p>{item.position}</p>
                            <p>{item.responsibilities}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default App;
