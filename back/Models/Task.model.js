import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    text: String,
    completed: Boolean,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }
})

const Task = mongoose.model('Task', taskSchema)

export default Task