import express from "express";
import { getPosts, createPost, getOnePost, updatePost, deletePost } from "../controllers/posts.js"

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getOnePost);
router.post('/', createPost);
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

export default router;