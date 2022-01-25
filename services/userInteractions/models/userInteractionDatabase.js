const mongoose = require('mongoose');

const userInteractionSchema = new mongoose.Schema({
    contentID:{
        type: String,
        required: true
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

const userInteractionDatabase = mongoose.model('USER_INTERACTION_DATABASE', userInteractionSchema);
module.exports = userInteractionDatabase;