import express from "express";
import verifyToken from "../config/verifyToken.js";
import {
  addPostVote,
  addCommentVote,
  getPostVotes,
  getCommentVotes,
  updatePostVote,
  updateCommentVote,
  deletePostVote,
} from "../controllers/voting.js";

const router = express.Router();

router.post("/posts/add", addPostVote);
router.post("/comments/add", addCommentVote);
router.put("/post", updatePostVote);
router.delete("/post", deletePostVote);
router.put("/comment", updateCommentVote);
router.get("/posts/:name", getPostVotes);
router.get("/comments/:name", getCommentVotes);

export default router;
