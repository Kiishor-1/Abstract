// routes/footerRoutes.js
const express = require('express');
const { getFooterData } = require('../controllers/footerController');

const router = express.Router();

router.get('/', getFooterData);

module.exports = router;
