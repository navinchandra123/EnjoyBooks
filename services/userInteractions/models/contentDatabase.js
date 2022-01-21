const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    title: {
        type:String, 
        required:true
    },
    story: { 
        type:String , 
        required:true
    },
    publishDate: {
        type:Date,
        required:true,
    },
    noOfLikes: {
        type:Number,
        default: 0,
    },
    noOfReads: {
        type:Number,
        default: 0
    },
});

const contentDatabase = mongoose.model('CONTENT_DATABASE', contentSchema);
module.exports = contentDatabase;