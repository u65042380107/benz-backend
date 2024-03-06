require('dotenv').config()

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");


// Create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

var app = express();

app.use(cors());

app.get("/products", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("/todo", function (req, res, next) {
  connection.query("SELECT * FROM `todo`", function (err, results, fields) {
    res.json(results);
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  });
});

app.listen(5000, function () {
  console.log("CORS-enabled web server listening on port 5000");
});
