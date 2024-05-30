import express from "express";
import authRoutes from "./routes/auth.route"
import messageRoutes from "./routes/message.route"
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

app.listen(port, () => {
    console.log("Server is running on port 5000");
    
})