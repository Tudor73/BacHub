import { pool as db } from "../models/postMessage.js";

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
        const results = await db.query("select * from posts where id = $1", [req.params.id]);
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
        const results = await db.query('INSERT INTO posts (title, text, author) values ($1, $2, $3)',
            [req.body.title, req.body.text, req.body.author]);
        res.status(201).send("created");
    } catch (err) {
        console.log(err);
    }
}

export const updatePost = async (req, res) => {

    try {
        const results = await db.query("UPDATE posts SET title = $1, text= $2, author = $3 WHERE id = $4 ",
            [req.body.title, req.body.text, req.body.author, req.params.id]);
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