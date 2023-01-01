import express from "express";
import verify from "../verifyToken.js";

import {
  deleteLists,
  getLists,
  createLists,
  getList,
} from "../controllers/lists.js";

const router = express.Router();

// CREATE

router.post("/", verify, createLists);

// DELETE

router.delete("/:id", verify, deleteLists);

// GET ALL

router.get("/", verify, getLists);

// GET ONE

router.get("/find/:id", verify, getList);

export default router;
