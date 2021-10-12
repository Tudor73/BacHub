import express from "express";
import verifyToken from "../config/verifyToken.js";
import { getDisplayName, updateUser } from "../controllers/users.js";

const router = express.Router();

router.put("/update", verifyToken, updateUser);
router.get("/get_name", verifyToken, getDisplayName);

export default router;
