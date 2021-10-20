import express from "express";
import verifyToken from "../config/verifyToken.js";
import { addVote, updateVote } from "../controllers/voting.js";

const router = express.Router();

router.post("/", addVote);
router.put("/", updateVote);

export default router;
