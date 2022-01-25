const router = require('express').Router();
const csv = require('csv-parser')
const fs = require('fs');
const axios = require('axios');
const contentDatabase = require('../../models/contentDatabase');

router.post('/', (req , res)=>{

    const results = []

    fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) =>{
        const {date , title , story} = data ;
        const newContent = new contentDatabase({publishDate : date , title , story});
        newContent.save((error , newContent)=>{
            if(error){
                res.status(400).send(error);
            }
            else {
              axios({
                method: 'post',
                url: 'http://localhost:8080/api/s3/initialize',
                data: {
                  contentID: newContent._id,
                  noOfLikes: 0,
                  noOfReads: 0,
                }
              });
                // request.post('http://localhost:8080/api/s3/updateUserInteraction', {form:{
                //     contentID: newContent._id,
                //     noOflikes: 0,
                //     noOfReads: 0,
                //   }
                // })
            }
        })
    })
    .on('end', () => {
        res.send('content successfuly added')
    });
})


module.exports = router ;