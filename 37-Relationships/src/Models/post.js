const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
})

const postSchema = new mongoose.Schema({
    content: String,
    likes: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

module.exports = {User, Post}