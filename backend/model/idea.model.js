import mongoose, { Schema, model } from 'mongoose'

const ideaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})

export default model('Idea', ideaSchema)