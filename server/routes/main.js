const express = require("express");
const router = express.Router();
const Article = require("./../models/article.model");
//routes

router.get("/", async (req, res) => {
  try {
    const locals = {
      title: "BlogApp",
      description: "It is simple Blog App",
    };

    let perPage = 10;
    let page = req.query.page || 1;

    const data = await Article.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count =   await Article.countDocuments();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render("index", {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});
module.exports = router;
