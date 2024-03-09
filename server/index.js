// dependencies
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// middle ware
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../build/")));
app.use(cookieParser());

const port = 4000;
const logPrefix = "[StudyNest]";

//mongodb
mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.bzugmcv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(() => { 
    console.log(`${logPrefix} Successfully connected to database!`); 
}).catch(err => { 
    console.error(`${logPrefix} ${err}`);
});

// auth
const authRoutes = require("./routes/auth")
app.use("/auth", authRoutes.router);


app.listen(port, ()=>{
    console.log(`${logPrefix} App running on port ${port}`);
})

