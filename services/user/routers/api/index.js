const router = require('express').Router();

router.use('/registration', require('./registration'));
router.use('/login' , require('./login'));
router.use('/update' , require('./updateUserProfile'));

router.get('*/', (req , res)=>{
    res.status(404).send('Page Not Found 404');
})


module.exports = router;