import express from "express";
import { createComment, getAllComments } from "../controllers/comments.js";
import verifyToken from "../config/verifyToken.js";

const router = express.Router();

router.get('/:id', getAllComments);
router.post('/', verifyToken, createComment);

export default router;