const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    addresses: [
        {
            location: String,
            city: String,
            _id: false
        },
    ],
    
});

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
 