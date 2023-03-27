const mongoose = require('mongoose')
const password = require('./password');
const db_link =  `mongodb+srv://admin:${password}@cluster0.1zpivwh.mongodb.net/?retryWrites=true&w=majority`

const connectMongo = ()=>{

    mongoose.connect(db_link, ()=>{
        console.log("db connected");
    })

}

module.exports = connectMongo;