import express from "express";
import { createComment, getAllComments } from "../controllers/comments.js";

const router = express.Router();

router.get('/:id', getAllComments);
router.post('/', createComment);

export default router;