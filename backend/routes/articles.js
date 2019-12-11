const express = require('express');
const articlesCtrl = require('../controllers/articles');

const router = express.Router();
router.post('/', articlesCtrl.createArticle);
router.get('/', articlesCtrl.getArticles);
router.get('/:id', articlesCtrl.getArticleById);
router.put('/:id', articlesCtrl.updateArticle);
router.delete('/:id', articlesCtrl.deleteArticle);
router.post('/:id/comment',articlesCtrl.commentOnArticle);



module.exports = router;