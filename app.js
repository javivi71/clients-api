import express from "express"; 
import cors from "cors";
import clientsRouter from "./routes/clientsRoutes.js"
import { connectDB } from "./config/db.js";
const app = express();

await connectDB();
app.use(cors());
app.use("/clients",clientsRouter);
app.listen(3000, () => {
  console.log("servidor iniciado");
})
