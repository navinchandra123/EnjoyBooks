const express = require('express')
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const config = require('./config');

const db = `mongodb://${config.db.username}:${config.db.password}@user-shard-00-00.l2ksl.mongodb.net:27017,user-shard-00-01.l2ksl.mongodb.net:27017,user-shard-00-02.l2ksl.mongodb.net:27017/${config.db.database}?ssl=true&replicaSet=atlas-132b77-shard-0&authSource=admin&retryWrites=true&w=majority`
mongoose.connect(db)
    .then(()=> console.log('connection successfull'))
    .catch((err)=>console.log('connection failed' , err));

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

const port = process.env.PORT || 8083

app.use(require('./routers'));

app.listen(port , ()=>{
    console.log(`User Service run on http://localhost:${port}`);
});