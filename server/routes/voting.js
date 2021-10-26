import express from "express";
import verifyToken from "../config/verifyToken.js";
import { addVote, getVotes, updateVote } from "../controllers/voting.js";

const router = express.Router();

router.post("/add", addVote);
router.put("/", updateVote);
router.post("/", getVotes);

export default router;
