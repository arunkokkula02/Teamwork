const express = require('express');
const userCtrl = require('../controllers/users');

const router = express.Router();
router.post('/create-user', userCtrl.createUser);



module.exports = router;