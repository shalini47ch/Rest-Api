import { v4 as uuidv4 } from "uuid";
let users = [];

export const getUser=(req, res) => {
    //   console.log(users);
    res.send(users);
  }

export const createUser=(req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    //this message helps to keep track that the request is updated
    res.send(`User with name ${user.firstName} added`)
}
export const getUserwithId=(req, res) => {
    //here in this params we get the specific unique id for each request
    const { id } = req.params;
    const founduser = users.find((user) => user.id === id);
    res.send(founduser);
  }

export const deleteUserwithId=(req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`The user with the specific id deleted from database`);
  }

export const updateUserwithId=(req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
  
    res.send(`User with the ${id} updated`)
  }


