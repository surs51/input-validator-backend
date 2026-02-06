import express from "express";
import bodyParser from "body-parser";
import {validateInput} from "./validate";

const app = express();

app.use(bodyParser.json());

app.post("/submit", (req, res) => {
  const input = req.body;
  const result = validateInput(input);

  res.status(result.ok ? 200 : 400).json(result);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
