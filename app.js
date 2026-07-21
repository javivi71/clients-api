import express from "express"; 
import cors from "cors";
import clientsRouter from "./routes/clientsRoutes.js"
import { connectDB } from "./config/db.js";

const app = express();
app.use(express.json());
app.use(cors());
await connectDB();

app.use("/clients",clientsRouter);
app.listen(3000, () => {
  console.log("servidor iniciado");
})
