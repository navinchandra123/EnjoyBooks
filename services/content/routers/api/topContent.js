const router = require('express').Router();
const axios = require('axios');
const  contentDatabase= require('../../models/contentDatabase')
router.get('/' , async(req , res)=>{
    try {
        
        const response = await axios.get('http://localhost:8080/api/s3/topContentID');
        contentID = response.data ;
        const result = [];
        contentID.forEach(async (element) => {
            contentDatabase.findOne({_id : element.contentID} , (err, content)=>{
                result.push(content); 
                if(result.length === contentID.length){
                    res.status(200).send(result);
                }
            });
        });
        

    } catch (error) {
        // console.log(error);
        res.status(400).send(error);
    }
})

module.exports = router;