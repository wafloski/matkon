import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface PersonalData {
    id: number;
    title: string;
    content: string;
}

const API_URL = 'http://localhost:1337';

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
    },
});

const fetchArticles = async () => {
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
        const getArticles = async () => {
            try {
                const data = await fetchArticles();
                setData(data);
            } catch (error) {
                setError('Error fetching articles');
            } finally {
                setLoading(false);
            }
        };

        getArticles();
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
        <div>
            <h1>Articles</h1>
            <ul>
                {data?.Experience?.workExperience?.map((article, index) => (
                    <li key={index}>
                        <h2>{article.company}</h2>
                        <p>{article.position}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
