const router = require('express').Router();


router.use('/user', require('./api'));


module.exports = router;