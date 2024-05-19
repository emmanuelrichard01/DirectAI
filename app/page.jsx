import Feed from '@components/Feed';
const Home = () => {
  return (
    <section className="w-full flex-center flex-col pt-3">
      <h1 className="head_text text-center">
        Global <span className="italic font-medium">Stacks</span> of{' '}
        <span className="inline-block bg-gradient-to-r from-teal-400  via-indigo-500 to-blue-600 bg-[length:100%_8px] bg-no-repeat bg-bottom">
          Coherent<span className="text-4xl"> 🚀</span>
        </span>{' '}
        & Structured
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Modern AI-Prompts</span>
      </h1>
      <p className="desc text-center">
        <span className="font-semibold">Direct Ai</span> is an open-source AI
        prompt stack platform for users worldwide to create and discover{' '}
        <span className="font-semibold">Efficient Ai prompts ✨</span>.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
