import mongoose from "mongoose";

export const connectDB = async () => {
  // await mongoose.connect("mongodb+srv://admin:admin@cluster0.yc6gq7w.mongodb.net/base?appName=Cluster0");
  await mongoose.connect("mongodb+srv://admin:admin@cluster0.yc6gq7w.mongodb.net/base");
  console.log("Mongo conectado");
};
