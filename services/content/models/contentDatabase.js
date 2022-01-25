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
});

const contentDatabase = mongoose.model('CONTENT_DATABASE', contentSchema);
module.exports = contentDatabase;