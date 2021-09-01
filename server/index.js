import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import postRoutes from "./routes/posts.js";
import commentRoutes from './routes/comments.js';
import authRoutes from "./routes/auth.js"
import dotenv from "dotenv";
import passport from 'passport';
import session from 'express-session';
import passportConfig from './config/passport.js';
import redis from 'redis';
import connectRedis from "connect-redis";


const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 3000

// configure redis for storing session 
const RedisStore = connectRedis(session);
const redisClient = redis.createClient({
    port: 6379,
    host: 'localhost'
});


app.use(cors());
app.use(express.json())
app.use(cookieParser())
// configure session 
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: new RedisStore({ client: redisClient }),
        cookie: {
            secure: false, // if true: only transmit cookies with https
            httpOnly: true, // prevents client side JS from reading cookie
            maxAge: 1000 * 60 * 30 // session max age in ms
        }
    })
)

// passport config  
passportConfig(passport);

app.use(passport.initialize());
app.use(passport.session());


//Routes
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/auth', authRoutes);

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




