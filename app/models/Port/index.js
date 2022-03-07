const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portSchema = new Schema({
    name: String,
    description: String,
    latitude: String,
    longitude: String,
    dock: [{
        type: Schema.Types.ObjectId,
        ref: 'dock'
    }]
});

const Port = mongoose.model('port', portSchema);
module.exports = Port;