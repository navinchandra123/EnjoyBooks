const router = require('express').Router();
const contentDatabase = require('../../models/contentDatabase')

router.get('/' , async(req , res)=>{
    try {
        result = await contentDatabase.find().sort({publishDate: -1})
        res.send(result);

    } catch (error) {
        res.status(400).send(error);
    }

})

module.exports = router ;