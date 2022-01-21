const router = require('express').Router();
const contentDatabase = require('../../models/contentDatabase')

router.post('/' , async(req , res)=>{
    try {
        var {_id ,title, story} = req.body;
        contentDatabase.updateMany({_id: _id} ,
            {
                title,
                story
            },()=>{
                console.log('update successful')
                res.send('Update Successfuly')
        })
    } catch (error) {
        res.status(400).send(error)
    }
    
    
})

module.exports = router;