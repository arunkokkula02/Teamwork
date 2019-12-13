const express = require('express');
const userCtrl = require('../controllers/users');
const Auth = require('../middileware/Auth')

const router = express.Router();
router.post('/create-user', userCtrl.createUser);
router.get('/get-users', userCtrl.getUsers);
router.post('/login',userCtrl.userLogin)



module.exports = router;