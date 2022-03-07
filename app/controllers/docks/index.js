const Dock = require('../../models/Dock')
const bcrypt = require('bcrypt');

module.exports = {

    create: async (req, res) => {

        try {
            const newDocks = new Dock(req.body);
            const results = await newDocks.save();
            res.status(201).json(results);

        } catch (error) {

            res.status(500).json({
                message: error,
            });

        }
    },
    getAll: async (req, res) => {

        try {

            const docks = await Dock.find({});
            res.status(200).json(docks);

        } catch (error) {

            res.status(500).json({
                message: error,
            });

        }
    },
    getSingle: async (req, res) => {

        try {
            const { dockId } = req.body;
            const dock = await Dock.findById(dockId);
            res.status(200).json(dock);

        } catch (error) {

            res.status(500).json({
                message: error,
            });

        }
    },
};