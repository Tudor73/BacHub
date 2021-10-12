import { pool as db } from "../config/db.js";

export const updateUser = async (req, res) => {
  try {
    const update = await db.query(
      "UPDATE users SET display_name = $1 WHERE user_name = $2",
      [req.body.new_name, req.body.name]
    );
    res.status(201).send("updated");
  } catch (error) {
    console.log(error);
  }
};
export const getDisplayName = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT display_name FROM users WHERE user_name = $1",
      [req.body.name]
    );
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        posts: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
