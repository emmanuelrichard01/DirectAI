import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
    if (!data || !Array.isArray(data)) {
        return <p>No posts available.</p>;
    }

    return (
        <div className='mt-16 prompt_layout'>
            {data.map((post) => (
                <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
            ))}
        </div>
    );
};

export default PromptCardList;
