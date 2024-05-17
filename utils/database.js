import mongoose from 'mongoose';

let isConnected = false; // Track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  if (!process.env.MONGODB_URI) {
    console.error('MongoDB URI is not defined in environment variables');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'directdb',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    // Optional: Implement retry logic
  }
};

// Optional: Implement retry logic
const connectWithRetry = async (retries = 5, delay = 3000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await connectToDB();
      break;
    } catch (error) {
      console.error(`Retrying MongoDB connection (${i + 1}/${retries})...`);
      await new Promise((res) => setTimeout(res, delay));
    }
  }
};

// Use connectWithRetry instead of connectToDB if retry logic is needed
export default connectWithRetry;
