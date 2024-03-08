// dependencies
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const port = 4000;

// middle ware
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../build/")));
app.use("/node_modules", express.static(path.join(__dirname, "../node_modules")));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(cookieParser())


const authRoutes = require("./routes/auth")
app.use("/auth", authRoutes);


app.listen(port, ()=>{
    console.log(`StudyNest is running on port ${port}`)
})

