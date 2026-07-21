import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno

export const connectDB = async () => {
  try{
   //await mongoose.connect("mongodb+srv://admin:admin@cluster0.yc6gq7w.mongodb.net/base");
   await mongoose.connect("mongodb+srv://admin:admin@cluster0.yc6gq7w.mongodb.net/base?appName=Cluster0",
      {
        // Opciones para evitar errores de conexión
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      }
    ); // Fin de connectDB 


  
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }

  console.log("Mongo conectado");
};
