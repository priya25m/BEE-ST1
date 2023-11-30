const Comment = mongoose.model('Comment', commentSchema);
const Post = mongoose.model('Post', postSchema);

// ----Middleware-----
app.use(bodyParser.json());

// CREATE OPERATOR
app.post('/posts', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ OPERATOR
app.get('/posts', async (req, res) => {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


//   UPDATE OPERATOR
  app.put('/posts/:postId', async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.postId, req.body, { new: true });
      if (!post) {
        res.status(404).json({ error: 'Post not found' });
      } else {
        res.status(200).json(post);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

//   DELETE OPERATOR

  app.delete('/posts/:postId', async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.postId);
      if (!post) {
        res.status(404).json({ error: 'Post not found' });
      } else {
        res.status(204).end();
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });