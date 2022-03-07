const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipSchema = new Schema({
    name: String,
    capacity: String,
    nationality: String,
    type: String,
    resetvations: [{
        type: Schema.Types.ObjectId,
        ref: 'reservation'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'owner'
    }
});

const Ship = mongoose.model('ship', shipSchema);
module.exports = Ship;