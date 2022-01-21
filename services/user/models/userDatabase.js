const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userSchema = new mongoose.Schema({
    firstName: {
        type:String, 
        required:true
    },
    lastName: {
        type:String , 
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    mobile: {
        type:String,
        required:true,
        unique: true
    },
    password: {
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
});

userSchema.methods.generateAuthToken = async function(){
    try {
        const token = await jwt.sign({_id : this._id} , process.env.SECRETE_KEY);
        this.tokens = await this.tokens.concat({token : token});
        await this.save();
        return token ;
    } catch (error) { 
        console.log('from userDatabase' , error);
    }
    next();
}


userSchema.pre('save' , async function(req , res , next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password , 10);
    }
    next();
})
const userDatabase = mongoose.model('USER_DATABASE', userSchema);
module.exports = userDatabase;