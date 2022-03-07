const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    Fullname: String,
    email: String,
    password: String,
    phoneNumber: String,
    adresse: String,
    nationality: String,
    description: String,
    ship: [{
        type: Schema.Types.ObjectId,
        ref: 'ship'
    }]
});

const Owner = mongoose.model('owner', ownerSchema);
module.exports = Owner;