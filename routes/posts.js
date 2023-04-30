const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");

const postRouter = express.Router();

const Posts = require("../models/posts");
// const Post = require("../models/post.model");


postRouter.get("/getAllPosts", (req, res) => {
      Posts.find({ verified: true })
            .then((posts) => res.json(posts))
            .catch((err) => res.status(400).json("Error: " + err));
})

postRouter.post("/write", (req, res) => {
      console.log("I was here")
      const text = req.body.text;
      const newPost = new Posts({
            content: text,
            userName: "Ravan",
            date: Date.now(),
            verified: true
      });
      newPost.save()
            .then(() => res.json("Post added!"))
            .catch(err => res.status(400).json("Error: " + err));
});

// export the postRouter
module.exports = postRouter;
