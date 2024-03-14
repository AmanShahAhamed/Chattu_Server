import mongoose from "mongoose";




const connectDB = (uri: string) => {
  mongoose
    .connect(uri, {
      dbName: "Chattu",
    })
    .then((data) => console.log(`Connect to DB ${data.connection.host}`))
    .catch((err) => {
      throw err;
    });
};



export default connectDB;
