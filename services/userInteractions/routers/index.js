const router = require('express').Router();


router.use('/userInteraction', require('./api'));

module.exports = router;