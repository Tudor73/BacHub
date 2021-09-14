import express from "express";

const router = express.Router();

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

export default router;