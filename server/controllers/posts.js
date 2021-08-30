import { pool as db } from "../config/db.js";

export const getPosts = async (req, res) => {

    try {
        const results = await db.query('select * from posts');
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                posts: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
}

export const getOnePost = async (req, res) => {

    try {
        const results = await db.query("select * from posts where post_id = $1", [req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                posts: results.rows,
            }
        });
    } catch (err) {
        console.log(err);
    }
}

export const createPost = async (req, res) => {

    try {
        const results = await db.query('INSERT INTO posts (title, text, author, materie) values ($1, $2, $3, $4)',
            [req.body.title, req.body.text, req.body.author, req.body.materie]);
        res.status(201).send("created");
    } catch (err) {
        console.log(err);
    }
}

export const updatePost = async (req, res) => {

    try {
        const results = await db.query("UPDATE posts SET title = $1, text= $2, author = $3, materie = $4 WHERE id = $5 ",
            [req.body.title, req.body.text, req.body.author, req.body.materie, req.params.id]);
        res.status(201).send("updated");
    } catch (err) {
        console.log(err);
    }
}
export const deletePost = async (req, res) => {

    try {
        const results = await db.query("DELETE FROM posts WHERE id = $1", [req.params.id]);
        res.status(201).send('deleted');
    } catch (err) {
        console.log(err);
    }
}