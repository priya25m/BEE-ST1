
const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const Post = require('../models/postModel');

exports.addComment = async (req, res) => {
  const { postId } = req.params;
  const { content, author } = req.body;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    post.comments.push({ content, author });
    await post.save();

    res.status(201).json(post.comments);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


