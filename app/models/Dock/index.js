const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dockSchema = new Schema({
    referance : String,
    resetvations: [{
        type: Schema.Types.ObjectId,
        ref: 'reservation'
    }],
    port: {
        type: Schema.Types.ObjectId,
        ref: 'port'
    }
});

const Dock = mongoose.model('dock', dockSchema);
module.exports = Dock;