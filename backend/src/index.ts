import express from "express";
import authRoutes from "./routes/auth.route"
import messageRoutes from "./routes/message.route"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = 5000;

app.use(cookieParser()); // to parse cookies
app.use(express.json()) // to parse the data 

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

app.listen(port, () => {
    console.log("Server is running on port 5000");    
})

// TODO: Add socket.io to the server 
// TODO: Configure this server for deployement.
