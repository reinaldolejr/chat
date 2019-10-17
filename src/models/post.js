var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    nickname: String,
    message: String,
    date: Date
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;