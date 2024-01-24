import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://127.0.0.1:27017/Job-Posting?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2",
      {
        //To avoid warning in the console
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`Database connectd: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
