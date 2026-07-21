// app.js
import express from "express";
import cors from "cors";
import clientsRouter from "./routes/clientsRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Conectar a la base de datos
try {
  await connectDB();
} catch (error) {
  console.error("❌ No se pudo conectar a la base de datos");
  process.exit(1);
}

// Rutas
app.use("/clients", clientsRouter);

// Ruta de prueba para verificar que el servidor funciona
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Servidor funcionando" });
});

// Manejador de errores 404
app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
});