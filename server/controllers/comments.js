import { pool as db } from "../config/db.js";

export const getAllComments = async (req, res) => {

    try {
        const result = await db.query("select * from comments where post_id = $1", [req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                comments: result.rows,
            }
        });    
    } 
    catch (err) {
        console.log(err);
    }
}

export const createComment = async (req, res) => {
    
    try { 
        const result = await db.query('INSERT INTO comments (post_id, author, comment_text) values ($1, $2, $3)',
        [req.body.post_id, req.body.author, req.body.comment_text]);
        res.status(201).send("created");
    }
    catch(err) {
        console.log(err);
    }
}


