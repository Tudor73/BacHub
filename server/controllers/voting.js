import { pool as db } from "../config/db.js";

export const getVotes = async (req, res) => {
  try {
    const results = await db.query(
      "SELECT * FROM voting WHERE user_name = $1",
      [req.body.name]
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

export const addVote = async (req, res) => {
  try {
    if (req.body.type == "comment") {
      const insert = await db.query(
        "INSERT INTO voting (user_name,comment_id,vote) VALUES($1, $2, $3)",
        [req.body.name, req.body.id, req.body.vote]
      );
    } else {
      const insert = await db.query(
        "INSERT INTO voting (user_name,post_id,vote) VALUES($1, $2, $3)",
        [req.body.name, req.body.id, req.body.vote]
      );
    }
    res.status(201).send("created");
  } catch (err) {
    console.log(err);
  }
};
export const updateVote = async (req, res) => {
  try {
    if (req.body.type == "comment") {
      const insert = await db.query(
        "UPDATE voting SET vote = $1 WHERE user_name = $2 AND comment_id = $3",
        [req.body.vote, req.body.name, req.body.id]
      );
    } else {
      const insert = await db.query(
        "UPDATE voting SET vote = $1 WHERE user_name = $2 AND post_id = $3",
        [req.body.vote, req.body.name, req.body.id]
      );
    }
    res.status(201).send("updated");
  } catch (err) {
    console.log(err);
  }
};
