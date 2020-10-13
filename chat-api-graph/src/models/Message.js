import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    content:{
        type:String
    }
})

export default mongoose.model('Message',Schema)