const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const containerSchema = new Schema({
    referance : String,
    weight : Number,
    dimenssions : String,
    brand: String,
    serviceDate:String,
    importStatus: String,
    customFeesStatus : Boolean,
    certificats : Boolean,
    customFee : {
        type: Schema.Types.ObjectId,
        ref: 'custom'
    }
});

const Container = mongoose.model('container', containerSchema);
module.exports = Container;