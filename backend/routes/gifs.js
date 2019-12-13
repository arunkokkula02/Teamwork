const express = require('express');
const gifCtrl = require('../controllers/gifs');
const Auth = require('../middileware/Auth')
const multer = require('../middileware/multerConfig');

const router = express.Router();
router.post('/', Auth.verifyToken,multer,gifCtrl.createGif);
router.get('/', gifCtrl.getGifs);




module.exports = router;