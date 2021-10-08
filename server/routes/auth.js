import express from "express";
<<<<<<< HEAD
import passport from "passport";

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile'], successFlash: "Welcome" }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:3001/error' }), (req, res) => {
    console.log(req.sessionID);
    res.redirect('http://localhost:3001/posts');
});

router.get('/logout', (req, res) => {
    if (req.session) {
        req.logOut();
        res.status(200).clearCookie('connect.sid', {
            path: '/'
        });
        req.session.destroy(function (err) {
            res.redirect('http://localhost:3001/posts');
        });
    }
    else {
        res.redirect('http://localhost:3001/posts');
    }
});

=======
import { googleLogin } from "../controllers/auth.js";
const router = express.Router();

router.post('/login', googleLogin)
>>>>>>> 0360ab4efaec9f2a9a3577407d2c6d9c19b1c424
export default router;