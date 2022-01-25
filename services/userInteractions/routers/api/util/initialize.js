const router = require('express').Router();
const userInteractionDatabase = require('../../../models/userInteractionDatabase')

router.post('/' , async(req , res)=>{
    try {
        var { contentID , noOfLikes , noOfReads } = req.body;
        userInteractionDatabase.findOne({contentID : contentID} , async(err , content)=>{
            if(err){
              res.status(400).send(err);
            }
            else if(content){
              userInteractionDatabase.updateMany({contentID : contentID} ,
                {
                  $inc: {noOfReads:noOfReads},
                  $inc: {noOfLikes:noOfLikes}
                },()=>{
                  console.log('Update user interaction successfully');
                })
            }
            else{
              const userInteraction = new userInteractionDatabase({contentID , noOfLikes , noOfReads});
              userInteraction.save(function(err , userInteraction){
                if(err)res.status(400).send(err);
                else console.log("Update user interaction successfully");
              })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
});

module.exports = router ; 