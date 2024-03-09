// dependencies
const express = require("express");
const router = express.Router();
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

// middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.join(__dirname, "../build/")));
router.use(cookieParser())

// Google authentication route
router.get("/getAssignments", (req, res)=>{
    
});
// Google authentication route
router.post("/addAssignment", (req, res)=>{
    
});


module.exports = router;
