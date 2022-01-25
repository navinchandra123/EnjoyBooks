const router = require('express').Router();


router.use('/content', require('./api'));


module.exports = router;