const Container = require('../../models/Conteneur');
const bcrypt = require('bcrypt');
const Custom = require('../../models/CustomFees');

module.exports = {

    create: async (req, res) => {
        try {
            console.log(req.body);
            const newContainer = new Container(req.body);
            let custom = await Custom.findById(req.body.customFee);
            newContainer.customFee = custom;
            const container = await newContainer.save();
            res.status(201).json(container);

        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    },
    getAll: async (req, res) => {
        try {
            const container = await Container.find();
            res.status(201).json(container);
        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }

    },
    getSingle: async (req, res) => {


    },
    delete: async (req, res) => {


    },
};