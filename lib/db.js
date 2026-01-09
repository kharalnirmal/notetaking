import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
let isConnected = false;
async function connectDB() {
  if (isConnected) {
    console.log("mongodb is already connected");
    return;
  }
  try {
    const connect = await mongoose.connect(MONGODB_URI);
    isConnected = connect.connection[0].readyState === 1;

    console.log(`DB connected success ${connect.connection.host}`, connect);
  } catch (error) {
    console.log("DB connection Failed ");
    throw error;
  }
}

export default connectDB;
