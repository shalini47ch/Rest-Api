import express from "express";
import {
  createUser,
  getUser,
  getUserwithId,
  deleteUserwithId,
  updateUserwithId,
} from "../controllers/users.js";

const router = express.Router();

//all the links are starting with /users
router.get("/", getUser);

//now the next step is to put some data in our users
router.post("/", createUser);

//now similarly get the elements of the specific id
router.get("/:id", getUserwithId);

//now here we need to delete the elements with a specific id
router.delete("/:id", deleteUserwithId);

//now the next one is to update the user and for that we will use a patch request
router.patch("/:id", updateUserwithId);

export default router;
