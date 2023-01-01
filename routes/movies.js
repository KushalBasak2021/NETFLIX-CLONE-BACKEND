import express from "express";
import verify from "../verifyToken.js";

import {
  deleteMovie,
  getMovies,
  getMovie,
  updateMovie,
  getRandomMovie,
  createMovie,
} from "../controllers/movies.js";

const router = express.Router();

// CREATE

router.post("/", verify, createMovie);

// UPDATE

router.put("/:id", verify, updateMovie);

// DELETE

router.delete("/:id", verify, deleteMovie);

// GET(one specific)

router.get("/find/:id", verify, getMovie);

// GET RANDOM (one specific)

router.get("/random", verify, getRandomMovie);

// GET ALL

router.get("/", verify, getMovies);

export default router;
