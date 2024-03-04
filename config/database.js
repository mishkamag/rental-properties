import mongoose from "mongoose";

let connected = false;

const connectDb = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("Mongoose already is connected ...");
    return;
  }

  //connect to mongodb
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    connected = true;
    console.log("Mongo db connected ...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
