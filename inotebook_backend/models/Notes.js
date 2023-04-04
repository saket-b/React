const { Schema } = require("mongoose")
const mongoose = require("mongoose");
// const { useCallback } = require("react");


const NotesSchema = new Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref :'user'
    },
    title :{
        type : String,
        required: true,
    },
    description :{
        type :String,
        required : true,
        
    },
    tag:{
        type : String,
        default : "General"
    },
   

})

const notesModel = mongoose.model('Notes', NotesSchema);
module.exports = notesModel;