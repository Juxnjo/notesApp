import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)