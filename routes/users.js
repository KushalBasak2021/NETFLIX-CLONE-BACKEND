import express from "express";
import verify from "../verifyToken.js";

import {
  deleteUser,
  getUsers,
  getUser,
  updateUser,
  getUserStats,
} from "../controllers/users.js";

const router = express.Router();

// UPDATE

router.put("/:id", verify, updateUser);

// DELETE

router.delete("/:id", verify, deleteUser);

// GET(one specific)

router.get("/find/:id", getUser);

// GET ALL

router.get("/", verify, getUsers);

// GET USER STATS

router.get("/stats", verify, getUserStats);

export default router;
