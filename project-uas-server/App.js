const express = require("express");
const multer = require("multer");
const cors = require("cors");
const mysql = require("mysql");
const fs = require("fs");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "warunginaja",
});

const app = express();
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("server has been starting at port " + PORT);
});
app.use(cors());
app.use(express.static("public"));

app.get("/detail", (req, res) => {
  pool.query("SELECT * FROM product", (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(result);
  });
});
app.get("/", (req, res) => {
  res.json({ message: "WELCOME" });
});
