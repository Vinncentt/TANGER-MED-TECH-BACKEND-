const Role = require('../../models/Roles')
const bcrypt = require('bcrypt');

module.exports = {

    create: async (req, res) => {

        try {

            const newRole = new Role(req.body);
            const role = await newRole.save();
            res.status(201).json(role);

        } catch (error) {

            res.status(500).json({
                message: error,
            });

        }
    },
    getAll: async (req, res) => {

        try {

            const roles = await Role.find({});
            res.status(200).json(roles);

        } catch (error) {

            res.status(500).json({
                message: error,
            });

        }
    },
    getSingle: async (req, res) => {

        try {
            const { roleId } = req.body;
            const role = await Role.findById(roleId);
            res.status(200).json(role);

        } catch (error) {

            res.status(500).json({
                message: error,
            });

        }
    },
    delete: async (req, res) => {
        try {
            const { _id } = req.body;
            const result = await Role.findByIdAndDelete(_id);
            res.status(202).json({
                message: "user was deleted succefully",
            });

        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    },
    update: async (req, res) => {
        try {
            const newRole = req.body;
            const result = await Role.findByIdAndUpdate(newRole._id, newRole, { new: true });
            res.status(200).json(result);

        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    },
};