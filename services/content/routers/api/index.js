const router = require('express').Router();

router.use('/addContent', require('./addContent'));
router.use('/updateContent', require('./updateContent'))

router.get('*/', (req , res)=>{
    res.status(404).send('Page Not Found 404');
})

module.exports = router;