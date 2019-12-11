const express = require('express');
const articlesCtrl = require('../controllers/articles');

const router = express.Router();
router.post('/', articlesCtrl.createArticle);
router.get('/', articlesCtrl.getArticles);
router.put('/:id', articlesCtrl.updateArticle);
router.delete('/:id', articlesCtrl.deleteArticle);



module.exports = router;