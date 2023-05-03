const express = require("express");
const cors = require("cors");
const pool = require("./database");

const app = express();

app.use(express.json());

app.use(cors());

app.get("/adduser", (req, res) => {
  const email = req.body["email"];
  const password = req.body["password"];
  console.log(email + " " + password);
  const insertUser = `INSERT INTO users (email, password) VALUES ('${email}', '${password}');`;
  pool
    .query(insertUser)
    .then(response => {
      console.log("Data saved");
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  console.log(JSON.stringify(req.body));
  res.send("Response Received: " + req.body);
});

app.listen(4000, () => console.log("server on localhost:4000"));
