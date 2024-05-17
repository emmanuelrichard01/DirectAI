import { useState, useEffect } from 'react';

const useFetchPosts = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/prompt');
                if (!response.ok) throw new Error('Failed to fetch posts');
                const data = await response.json();
                setAllPosts(Array.isArray(data) ? data : []);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPosts();
    }, []);

    return { allPosts, error };
};

export default useFetchPosts;
