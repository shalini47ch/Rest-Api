import userRouter from "./routes/users.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  console.log("Welcome to our homepage");
  res.send("Home page of the app");
});
app.use(bodyParser.json());
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on PORT: http://localhost:${PORT}`);
});
