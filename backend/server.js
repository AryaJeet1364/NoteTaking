import express from "express";
import notesRoutes from "./src/routes/notesRoutes.js";
import {connectDB} from "./src/config/db.js"
import dotenv from "dotenv";
import rateLimiter from "./src/middlewares/rateLimiter.js";

 
dotenv.config();


const app = express();


app.use(express.json())
app.use(rateLimiter)

app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
  app.listen(5001, () => {
    console.log("Server started on port: 5001");
  });
});

