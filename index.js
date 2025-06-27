import app from "./app.js";
import dotenv from "dotenv"
import { createServer } from "http";

dotenv.config();
const server = createServer(app);
const PORT = 9300;

server.listen(PORT, () => {
    try{ 
        console.log(`Server running on ${PORT}`);
    }
    catch(error) {
        console.log("Error starting the server.", error)
    }
})