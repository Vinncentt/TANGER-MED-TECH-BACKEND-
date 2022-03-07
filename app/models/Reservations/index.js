const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    referance : String,
    dateCheckIn  : Date,
    dateCheckOut  : Date,
    numberOfContainer : Number,
    maxDays : Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    dock : {
        type: Schema.Types.ObjectId,
        ref : 'dock'
    }
});

const Reservation = mongoose.model('reservation', reservationSchema);
module.exports = Reservation;