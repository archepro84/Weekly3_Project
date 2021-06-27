const mongoose = require('mongoose');
const {Schema} = mongoose;
const postSchema = new Schema({
    postId: {
        type: Number,
        required: true,
        unique: true,
    },
    user: {
        type: String,
    },
    password: {
        type: String,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model(`Post`, postSchema);