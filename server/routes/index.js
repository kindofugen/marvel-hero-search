const express = require('express');
const router = express.Router({mergeParams: true});

router.use('/auth', require('./auth.routes'));
router.use('/signup', require('./auth.routes'));
router.use('/signin', require('./auth.routes'));

module.exports = router;