const router = require('express').Router();
const userDatabase = require('../../models/userDatabase')

router.post('/' , async(req , res)=>{
    try {
        var {_id ,firstName, lastName, email, mobile} = req.body;
        userDatabase.updateMany({_id: _id} ,
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobile: mobile
            },()=>{
                console.log('update successful')
                res.send('Update Successfuly')
        })
    } catch (error) {
        res.status(400).send(error)
    }
    
    
})

module.exports = router;