const router = require('express').Router();
const csv = require('csv-parser')
const fs = require('fs');
const contentDatabase = require('../../models/contentDatabase');

router.post('/', (req , res)=>{

    const results = []

    fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) =>{
        const {date , title , story} = data ;
        const newContent = new contentDatabase({publishDate : date , title , story});
        newContent.save((error)=>{
            if(error){
                res.status(400).send(error);
            }
        })
    })
    .on('end', () => {
        res.send('content successfuly added')
    });
})


module.exports = router ;