const { allCards, specificCard, createCard } = require('../controllers/Card');
const Card = require('../models/Card');
const express = require('express');
const router = express.Router();

router.route("/")
    .get(allCards)
    .post(createCard);

router.route("/:title")
    .get(specificCard)

module.exports = router;