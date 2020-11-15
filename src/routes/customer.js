// routing cac tac vu khach hang
const express = require('express');
const router = express.Router();

const Customerontroller = require('../app/controllers/CustomerController');

router.get('/singin', Customerontroller.creat);
router.post('/store', Customerontroller.store )



module.exports = router;