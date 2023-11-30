const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/api/posts', postController.createPost);

module.exports = router;

