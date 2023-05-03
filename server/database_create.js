const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "123#@!",
  host: "localhost",
  port: 5432
});

const createTblQuery = `CREATE TABLE users (
    user_id serial PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);`;

pool
  .query("CREATE DATABASE login_system;")
  .then(Response => {
    console.log("Database created");
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
