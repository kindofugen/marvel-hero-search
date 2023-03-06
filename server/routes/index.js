const express = require('express');
const router = express.Router({mergeParams: true});

router.use('/auth', require('./auth/auth.routes'));
router.use('/signup', require('./auth/auth.routes'));
router.use('/signin', require('./auth/auth.routes'));

module.exports = router;