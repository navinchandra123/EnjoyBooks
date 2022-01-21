const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userDatabase = require('../../models/userDatabase');

router.get('/', (req, res) => {

    // send the login page
    res.send('Login Page')
})

router.post('/',(req, res) => {
    let { email, password} = req.body;
    if (!email || !password) {
        return res.send('Please fill all the field')
    }
   
    userDatabase.findOne({ email: email }, async (err, user) => {
        try {
            if (err) {
                throw err;
            }
            if (user) {
                bcrypt.compare(password, user.password, function(err, response) {
                    if(response){
                        // Send to Home page 
                        res.send('Successfuly login')
                    }
                    else{
                        res.send('Incorrect Email or Password');
                    }
                  });
            }
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
        
    })
})


module.exports = router;