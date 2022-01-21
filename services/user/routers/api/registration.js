const router = require('express').Router();
const userDatabase = require('../../models/userDatabase')

router.get('/', (req , res)=>{

    // send the registration page 

    return res.send('Registration Page')
})

router.post('/' , async(req , res)=>{
    //console.log('this is post registration');
    try {
        var { firstName, lastName, email, mobile, password , matchPassword } = req.body;

        if (!firstName || !email || !lastName || !password || !matchPassword || !mobile) {
            return res.send('Please fill all the field')
        }
        if (password !== matchPassword) {
            return res.send('Password does not match')
        }
        if (mobile.length != 10) {
            return res.send('Invalid mobile number')
        }
        userDatabase.findOne({ email: email }, async (err, user) => {
            try {
                if (err) {
                    throw err;
                }
                if (user) {
                    //console.log('Email already Exist....');
                    return res.send('Email Already Exxist');
                }
                else {
                    var newUser = { firstName, lastName, email, mobile, password };
                    const user = new userDatabase(newUser);

                    const token = await user.generateAuthToken();
                    res.cookie('jwt', token, {
                        expires: new Date(Date.now() + 3000000),
                        httpOnly: true
                    })

                    user.save(function (err, newUser) {
                        if (err) return console.error(err);
                        console.log('One item iserted successfully....');

                        // redirect to Content page

                        return res.send('Redirect to content page');
                    });
                }

            } catch (error) {
                console.log('HII', error)
                res.status(400).send(error);
            }

        });
    } catch (error) {
        res.status(400).send(error);
    }
})


module.exports = router;