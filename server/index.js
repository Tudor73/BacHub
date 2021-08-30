import express from 'express';
import cors from "cors";
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import postRoutes from "./routes/posts.js";
import commentRoutes from './routes/comments.js';
import dotenv from "dotenv";


const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: './config.env' });
const app = express();

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json())
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes)

app.get('/pdf', (req, res) => {

    let img = __dirname + '/curs.pdf';
    fs.readFile(img, (err, content) => {
        if (err) {
            res.writeHead(404, { "Content-type": "text/html" });
            res.end("<h1>No such file</h1>");
        } else {
            res.writeHead(404, { "Content-type": "application/pdf" });
            res.end(content);
        }
    }); // send pdf 
});




app.listen(PORT, () => { console.log("Server is running ") });




