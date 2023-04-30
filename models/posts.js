const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
      content: {
            type: String,
            required: true,
            minlength: 6,
      },
      userName: {
            type: String,
            required: true,
            minlength: 3
      },
      date: {
            type: Date,
            required: true,
      },
      verified: {
            type: Boolean,
            required: true,
            default: false
      },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;