var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PostSchema = new Schema({
  content: { type: String },
  author: { type: String },
  img: { type: String }
});

//export model
module.exports = mongoose.model("Post", PostSchema);
