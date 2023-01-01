import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import moviesRoute from "./routes/movies.js";
import listsRoute from "./routes/lists.js";

const app = express();

dotenv.config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to mongodb server"))
  .catch((err) => console.log(err));

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/lists", listsRoute);

app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running");
});
