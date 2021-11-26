import { pool as db } from "../config/db.js";

export const getPostVotes = async (req, res) => {
  try {
    const results = await db.query(
      "SELECT user_name, vote, post_id FROM voting WHERE user_name = $1 AND post_id IS NOT NULL",
      [req.params.name]
    );
    res.status(200).json({
      status: "success",
      // results: results.rows.length,
      data: {
        votes: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
export const getCommentVotes = async (req, res) => {
  try {
    const results = await db.query(
      "SELECT user_name, vote, comment_id FROM voting WHERE user_name = $1 AND comment_id IS NOT NULL",
      [req.params.name]
    );
    res.status(200).json({
      status: "success",
      // results: results.rows.length,
      data: {
        votes: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const addPostVote = async (req, res) => {
  try {
    console.log(req.body.user_name, req.body.vote, req.body.post_id);
    const insert = await db.query(
      "INSERT INTO voting (user_name,post_id,vote) VALUES($1, $2, $3)",
      [req.body.user_name, req.body.post_id, req.body.vote]
    );
    if (req.body.vote == 1) {
      const update = await db.query(
        "UPDATE posts SET votes = votes + 1 WHERE post_id = $1",
        [req.body.post_id]
      );
    } else {
      const update = await db.query(
        "UPDATE posts SET votes = votes - 1 WHERE post_id = $1",
        [req.body.post_id]
      );
    }
    res.status(201).send("created");
  } catch (err) {
    console.log(err);
  }
};

export const addCommentVote = async (req, res) => {
  try {
    const insert = await db.query(
      "INSERT INTO voting (user_name,comment_id,vote) VALUES($1, $2, $3)",
      [req.body.name, req.body.id, req.body.vote]
    );
    if (req.body.vote == 1) {
      const update = await db.query(
        "UPDATE comments SET votes = votes + 1 WHERE comment_id = $1",
        [req.body.comment_id]
      );
    } else {
      const update = await db.query(
        "UPDATE comments SET votes = votes - 1 WHERE comment_id = $1",
        [req.body.comment_id]
      );
    }
    res.status(201).send("created");
  } catch (err) {
    console.log(err);
  }
};

export const updatePostVote = async (req, res) => {
  try {
    const insert = await db.query(
      "UPDATE voting SET vote = $1 WHERE user_name = $2 AND post_id = $3",
      [req.body.vote, req.body.user_name, req.body.post_id]
    );
    if (req.body.vote == 1) {
      const update = await db.query(
        "UPDATE posts SET votes = votes + 2 WHERE post_id = $1",
        [req.body.post_id]
      );
    } else {
      const update = await db.query(
        "UPDATE posts SET votes = votes - 2 WHERE post_id = $1",
        [req.body.post_id]
      );
    }
    res.status(201).send("updated");
  } catch (err) {
    console.log(err);
  }
};
export const updateCommentVote = async (req, res) => {
  try {
    const insert = await db.query(
      "UPDATE voting SET vote = $1 WHERE user_name = $2 AND comment_id = $3",
      [req.body.vote, req.body.user_name, req.body.comment_id]
    );
    if (req.body.vote == 1) {
      const update = await db.query(
        "UPDATE comments SET votes = votes + 2 WHERE comment_id = $1",
        [req.body.comment_id]
      );
    } else {
      const update = await db.query(
        "UPDATE comments SET votes = votes - 2  WHERE comment_id = $1",
        [req.body.comment_id]
      );
    }
    res.status(201).send("updated");
  } catch (err) {
    console.log(err);
  }
};
export const deletePostVote = async (req, res) => {
  try {
    const deletePost = await db.query(
      "DELETE FROM voting WHERE user_name = $1 AND post_id = $2",
      [req.body.user_name, req.body.post_id]
    );
    res.status(200).send("deleted");
  } catch (error) {
    console.log(error);
  }
};
