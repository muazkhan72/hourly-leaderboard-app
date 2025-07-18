const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    userId: String,
    fire: Number,
    avatar: String,
    position: Number,
});

module.exports = mongoose.model('User', userSchema);