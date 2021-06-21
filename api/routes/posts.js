const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    //check registered user
    const currentUser = await User.findById(req.body.userId);
    if (!currentUser)
      return res.status(501).json("You must be registered user!");

    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (error) {
    return res.status(500).json(error);
  }
});
//update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json("Post not found!");
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      return res.status(200).json("Post has been updated");
    } else {
      return res.status(403).json("You can update only your post!");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});
//delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json("Post not found!");
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.status(200).json("Post has been deleted");
    } else {
      return res.status(403).json("You can delete only your post!");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});
//like a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json("Post not found!");
    if (post.userId === req.body.userId)
      return res.status(403).json("You cant like your post!");
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      return res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      return res.status(200).json("The post has been disliked");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});
//get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json("Post not found!");
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error);
  }
});
//get timeline posts : All folowings user post
router.post("/timeline/all", async (req, res) => {
  let timelinePosts = [];
  try {
    const currentUser = await User.findById(req.body.userId);
    if (!currentUser)
      return res.status(501).json("You must be registered user!");

    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPost = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    return res.status(200).json(userPosts.concat(...friendPost));
  } catch (error) {
    return res.status(500).json(error);
  }
});
module.exports = router;
