import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

//here creating the mock data as we have in out json file
let users = [];

//all the links are starting with /users
router.get("/", (req, res) => {
  //   console.log(users);
  res.send(users);
});

//now the next step is to put some data in our users
router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  //this message helps to keep track that the request is updated
  res.send(users);
  res.send(`User with name ${user.firstName} added`);
});

//now similarly get the elements of the specific id
router.get("/:id", (req, res) => {
  //here in this params we get the specific unique id for each request
  const { id } = req.params;
  const founduser = users.find((user) => user.id === id);
  res.send(founduser);
});

//now here we need to delete the elements with a specific id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.send(`The user with the specific id deleted from database`);
});

export default router;
