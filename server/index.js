const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const db = require("../db/index.js");
db.connect();
app.use(express.static("./client/dist"));
app.use(morgan("tiny"));

app.get("/", (req, res) => res.render("index.js"));
app.post("/", (req, res) => console.log("post req"));
app.get("/api/cows", (req, res) => console.log("request for cows"));
app.post("/api/cows", (req, res) => console.log("request to insert cows"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
