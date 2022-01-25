const router = require('express').Router();
const contentDatabase = require('../../../models/userInteractionDatabase');

router.get('/' , async(req , res)=>{
    try {
        const result = await contentDatabase.find().sort({noOfReads: -1, noOfLikes: -1});
        //console.log(result);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

module.exports = router ;