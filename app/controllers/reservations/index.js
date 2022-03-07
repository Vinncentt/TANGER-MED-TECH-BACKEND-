const Reservation = require('../../models/Reservations');
const Dock = require('../../models/Dock');
const bcrypt = require('bcrypt');
const User = require('../../models/Users');

module.exports = {

    create: async (req, res) => {

        try {
            let maxUnloadPerDay = 100;
            const newReservation = new Reservation(req.body);
            maxDays = newReservation.numberOfContainer / maxUnloadPerDay + 1;
            newReservation.maxDays = maxDays;

            let user = await User.findById(req.body.userId);
            newReservation.user = user;

            let dock = await Dock.findById(req.body.dockId);
            newReservation.dock = dock;

            const reservations = await newReservation.save();

            dock.resetvations.push(newReservation);
            await dock.save();

            user.resetvations.push(newReservation);
            await user.save();

            res.status(201).json(reservations);

        } catch (error) {

            res.status(500).json({
                message: error,
            });

        }
    },
    getAll: async (req, res) => {

        try {

            const reservations = await Reservation.find({});
            res.status(200).json(reservations);

        } catch (error) {

            res.status(500).json({
                message: error,
            });

        }
    },
    getSingle: async (req, res) => {

        try {
            const { reservationId } = req.body;
            const role = await Reservation.findById(reservationId);
            res.status(200).json(role);

        } catch (error) {

            res.status(500).json({
                message: error,
            });

        }
    },
    delete: async (req, res) => {
        try {
            const { reservationId } = req.body;
            const result = await Reservation.findByIdAndDelete(reservationId);
            res.status(202).json({
                message: "Reservation was deleted succefully",
            });

        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    },
    checkAvailability: async (req, res) => {
        try {
           /*  initialDate = new Date(req.body.dateCheckIn)
            let dateCheckIn = new Date(req.body.dateCheckIn);

            let days = req.body.numberOfContainer / 100 + 1;

            dateCheckIn.setDate(dateCheckIn.getDate() + days);

            console.log("date chek in",initialDate);
            console.log("date chek out",dateCheckIn); */

            const allReservations = await Reservation.find({
                "dateCheckIn": { $gte: req.body.dateCheckIn, },
                "dateCheckOut": { $lte: req.body.dateCheckOut },
                "dock":req.body.dock
            });
            if (allReservations.length != 0) {
                res.status(400)
                    .json({
                        message: "this date already exist",
                        arrayLength: allReservations.length
                    });
    
            } else {
                res.status(200)
                    .json({
                        message: "this date is available",
                        arrayLength: allReservations.length
                    });
            }
        } catch (error) {

            res.status(500).json({
                message: error,
            });
        }
    },
};