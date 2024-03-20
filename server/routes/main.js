const express = require("express");
const router = express.Router();

//routes

router.get("/", (req, res) => {
   const locals = {
    title: "BlogApp",
    description:"It is simple Blog App"
   }
    res.render("index",{locals});
});

router.get("/about", (req, res) => {
  res.render("about");
});
module.exports = router;
