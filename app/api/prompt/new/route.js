import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const POST = async (request) => {
  const { userId, prompt, tags } = await request.json();

  if (!userId || !prompt || !tags) {
    return new Response(
      JSON.stringify({ message: 'Missing required fields' }),
      { status: 400 }
    );
  }

  try {
    await connectToDB();
    const newPrompt = new Prompt({ creator: userId, prompt, tags });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.error('Failed to create a new prompt:', error);
    return new Response(
      JSON.stringify({
        message: 'Failed to create a new prompt',
        error: error.message,
      }),
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate('creator');
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch prompts', { status: 500 });
  }
};
