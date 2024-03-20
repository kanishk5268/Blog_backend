const express = require("express");
const router = express.Router();
const Article = require('./../models/article.model');
//routes

router.get("/",async (req, res) => {
   const locals = {
    title: "BlogApp",
    description:"It is simple Blog App"
   }


   try {
    const data = await Article.find();
    res.render("index",{locals,data});
   } catch (error) {
    console.log(error);
   }
  });

  





router.get("/about", (req, res) => {
  res.render("about");
});
module.exports = router;
