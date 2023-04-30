const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");

const postRouter = express.Router();

const Posts = require("../models/posts");
const Post = require("../models/posts");
// const Post = require("../models/post.model");


postRouter.get("/getAllPosts", (req, res) => {
      Posts.find({ verified: true })
            .sort({ date: "desc" })
            .then((posts) => res.json(posts))
            .catch((err) => res.status(400).json("Error: " + err));
});


postRouter.get("/getUnverifiedPosts", (req, res) => {
      console.log("Getting Unverified Posts");
      Posts.find({ verified: false })
            .then((posts) => res.json(posts))
            .catch((err) => res.status(400).json("Error: " + err));
})

postRouter.post("/removePost", (req, res) => {
      console.log(req.body);
      Post.findOneAndDelete({ _id: req.body.id }).exec();
      res.send("Post Removed");
})

postRouter.post("/verifyPost", (req, res) => {
      Post.findOneAndUpdate({ _id: req.body.id }, { verified: true }).exec();
      res.send("Post Verified");
})


postRouter.post("/write", (req, res) => {
      const text = req.body.text;
      console.log("Text : ", text);
      const newPost = new Posts({
            content: text,
            userName: req.body.userName || "Annonymous",
            date: Date.now(),
            verified: false
      });
      newPost.save()
            .then(() => res.json("Post added!"))
            .catch(err => res.status(400).json("Error: " + err));
});

// export the postRouter
module.exports = postRouter;
