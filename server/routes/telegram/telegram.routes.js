const express = require('express');
const router = express.Router();

router.get('/telegramShare', (req, res) => {
    const featureFlag = true;
    res.status(200).send({telegramEnable: featureFlag});
});

module.exports = router;