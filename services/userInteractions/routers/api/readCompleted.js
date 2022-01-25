const router = require('express').Router();
const contentDatabase = require('../../models/userInteractionDatabase')

router.post('/:contentID' , async(req , res)=>{
    try {
        var contentID = req.params.contentID;
        contentDatabase.updateMany({contentID: contentID} ,
            {
                $inc: {noOfReads:1}
            },()=>{
                console.log('update successful')
                res.send('Update Successfuly')
        })
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router ; 