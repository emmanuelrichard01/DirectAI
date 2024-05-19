import PropTypes from 'prop-types';
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data = [], handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data.length > 0 ? (
          data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </section>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
};

Profile.defaultProps = {
  data: [],
  handleEdit: null,
  handleDelete: null,
};

export default Profile;
