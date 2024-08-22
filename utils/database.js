import mongoose from 'mongoose';

let isConnected = false; // Track the connection

export const connectToDB = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('MongoDB URI is not defined in environment variables');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'directdb',
    });

    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error; // Propagate the error for proper handling
  }
};

// Implement retry logic
const connectWithRetry = async (retries = 5, delay = 3000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await connectToDB();
      return; // Successfully connected, exit the function
    } catch (error) {
      if (i === retries - 1) {
        console.error(`Failed to connect after ${retries} attempts:`, error);
        throw error; // Throw error after all retries fail
      }
      console.error(`Retrying MongoDB connection (${i + 1}/${retries})...`);
      await new Promise((res) => setTimeout(res, delay));
    }
  }
};

export default connectWithRetry;
