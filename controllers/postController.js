var Post = require("../models/post");

//validate
// body and validationresult are not needed because there arent specific requirements for inputs
//const { body, validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");

//render the posts
exports.index = function (req, res, next) {
  // get all posts in db
  Post.find({}).exec((err, postlist) => {
    if (err) {
      return next(err);
    }
    // render the postlist in index.pug, no need to check if empty here
    res.render("index", { postlist: postlist });
  });
};

exports.search = function (req, res, next) {
  sanitizeBody("*").trim().escape();

  // get posts with x author
  Post.find({ author: req.body.author }).exec((err, postlist) => {
    if (err) {
      return next(err);
    }
    // render the postlist in index.pug, no need to check if empty here
    res.render("index", { postlist: postlist });
  });
};

exports.create = function (req, res, next) {
  sanitizeBody("*").trim().escape();

  // Create a post object
  var post = new Post({ content: req.body.content, author: req.body.author });

  post.save(function (err) {
    if (err) {
      return next(err);
    }
    // Successful - redirect to main page
    res.redirect("/");
  });
};
