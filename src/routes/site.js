// routing trang chủ
const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
//router.use('/:id' , siteController.product)

module.exports = router;
