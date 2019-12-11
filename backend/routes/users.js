const express = require('express');
const userCtrl = require('../controllers/users');

const router = express.Router();
router.post('/create-user', userCtrl.createUser);
router.get('/get-users', userCtrl.getUsers);



module.exports = router;