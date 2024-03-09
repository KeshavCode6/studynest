const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    display: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    assignments: {
        type: [Object], // Use the assignment schema directly here
        default: []
    }
});

const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
