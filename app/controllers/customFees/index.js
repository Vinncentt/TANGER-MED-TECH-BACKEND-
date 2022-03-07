const Custom = require('../../models/CustomFees');
const bcrypt = require('bcrypt');

module.exports = {

    create: async (req, res) => {
        try {
            console.log(req.body);
            const newCustom = new Custom(req.body);
            const custom = await newCustom.save();
            res.status(201).json(custom);

        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    },
    getAll: async (req, res) => {
        const custom = await Custom.find();
        res.status(201).json(custom);

    },
    getSingle: async (req, res) => {


    },
    delete: async (req, res) => {


    },
};