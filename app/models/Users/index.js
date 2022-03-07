const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Fullname: String,
    email: String,
    password: String,
    phoneNumber: String,
    adresse: String,
    nationality:String,
    resetvations: [{
        type: Schema.Types.ObjectId,
        ref: 'reservation'
    }],
    role: {
        type: Schema.Types.ObjectId,
        ref: 'role'
    }
});

const User = mongoose.model('user', userSchema);
module.exports = User;