require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString);

const express = require("express");
const cors = require("cors");
const app = express();

const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities")

app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
);

app.get("/", (req, res) => {
    res.json({data: "hello"});
});

//create account
app.post("/create-account", async (req, res)=>{

    const { fullName, email, password } = req.body;

    if (!fullName){}

});

app.listen(8000);

module.exports = app;