const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cunstomsSchema = new Schema({
    fee :Number,
    description:String,
    container:[{
        type: Schema.Types.ObjectId,
        ref: 'container'
    }]
});

const Custom = mongoose.model('custom', cunstomsSchema);
module.exports = Custom;