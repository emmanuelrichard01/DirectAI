import { useState, useEffect } from 'react';

const useSearch = (allPosts) => {
    const [searchText, setSearchText] = useState('');
    const [searchedResults, setSearchedResults] = useState([]);

    useEffect(() => {
        if (searchText === '') {
            setSearchedResults([]);
        } else {
            const searchResult = filterPrompts(searchText);
            setSearchedResults(searchResult);
        }
    }, [searchText, allPosts]);

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const filterPrompts = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        return allPosts.filter((post) => {
            const hasMatchingTag = post.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery));
            const hasMatchingUsername = post.creator.username && post.creator.username.toLowerCase().includes(lowerCaseQuery);
            const hasMatchingPrompt = post.prompt.toLowerCase().includes(lowerCaseQuery);
            return hasMatchingTag || hasMatchingUsername || hasMatchingPrompt;
        });
    };

    return {
        searchText,
        searchedResults,
        handleSearchChange,
        setSearchText,
        filterPrompts,
        setSearchedResults,
    };
};

export default useSearch;
