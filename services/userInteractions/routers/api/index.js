const router = require('express').Router();

router.use('/readCompleted', require('./readCompleted'));
router.use('/initialize', require('./util/initialize'));
router.use('/like', require('./likes'));
router.use('/topContentID', require('./util/getTopContentID'));
router.get('*/', (req , res)=>{
    res.status(404).send('Page Not Found 404');
})

module.exports = router;