var express = require("express");
var router = express.Router();

// Require controllers
var postcontroller = require("../controllers/postController");

// get postlist and render it
router.get("/", postcontroller.index);

// filter by author
router.get("/search", postcontroller.search);

// create a new post
router.post("/create", postcontroller.create);

module.exports = router;
