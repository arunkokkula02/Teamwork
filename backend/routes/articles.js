const express = require('express');
const articlesCtrl = require('../controllers/articles');
const Auth = require('../middileware/Auth')

const router = express.Router();
router.post('/', Auth.verifyToken, articlesCtrl.createArticle);
router.get('/',Auth.verifyToken, articlesCtrl.getArticles);
router.get('/:id', Auth.verifyToken,articlesCtrl.getArticleById);
router.put('/:id',Auth.verifyToken, articlesCtrl.updateArticle);
router.delete('/:id',Auth.verifyToken, articlesCtrl.deleteArticle);
router.post('/:id/comment',Auth.verifyToken,articlesCtrl.commentOnArticle);



module.exports = router;