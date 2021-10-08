import express from "express";
import { getPosts, createPost, getOnePost, updatePost, deletePost } from "../controllers/posts.js"
import verifyToken from "../config/verifyToken.js";

const router = express.Router();

// verify token used for private routes

router.get('/', getPosts);
router.get('/:id', getOnePost);
router.post('/',verifyToken, createPost); 
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

export default router;