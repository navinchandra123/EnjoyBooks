const router = require('express').Router();
const contentDatabase = require('../../models/contentDatabase')

router.post('/' , async(req , res)=>{
    try {
        var { _id } = req.body;
        contentDatabase.updateMany({_id: _id} ,
            {
                $inc: {noOfLikes:1}
        },()=>{
                console.log('update successful')
                res.send('Update Successfuly')
        })
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
});

module.exports = router ; 