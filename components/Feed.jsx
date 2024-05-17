"use client";

import useFetchPosts from "./useFetchPosts";
import useSearch from "./useSearch";
import PromptCardList from "./PromptCardList";

const Feed = () => {
  const { allPosts, error } = useFetchPosts();
  const {
    searchText,
    searchedResults,
    handleSearchChange,
    setSearchText,
    filterPrompts,
    setSearchedResults,
  } = useSearch(allPosts);

  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center' role="search">
        <input
          type='text'
          placeholder='Find tags or username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
          aria-label="Search prompts by tag or username"
        />
      </form>

      {error && <div className="error">{error}</div>}

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList
          data={searchedResults || []} // Ensure it's an array
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPosts || []} handleTagClick={handleTagClick} /> // Ensure it's an array
      )}
    </section>
  );
};

export default Feed;
