const User = require('../../models/Users');
const Role = require('../../models/Roles');
const bcrypt = require('bcrypt');

module.exports = {
    //get all users from the database 
    create: async (req, res) => {
        
        try {
            const userPassword = req.body.password;
            let hashedPassword = await bcrypt.hash(userPassword, 8);

            let newUser = new User({
                Fullname: req.body.Fullname,
                email: req.body.email,
                password: hashedPassword,
                phoneNumber: req.body.phoneNumber,
                adresse: req.body.adresse,
                nationality: req.body.nationality,
            });

            const role = await Role.findById(req.body.roleId);
            newUser.role = role;
            await newUser.save();
            role.users.push(newUser);
            await role.save();
            res.status(201).json(newUser);
            
        } catch (error) {

            res.status(500).json({
                message: error,
            });

        }
    },
    //insert new user into the database
    getSingle: async (req, res) => {
        try {
            const { userId } = req.body;
            const user = await User.findById(userId);
            res.status(200).json(user);

        } catch (error) {

            res.status(500).json({
                message: error,
            });

        }
    },
    //get single user by his index
    getAll: async (req, res, next) => {
        try {

            const users = await User.find({});
            res.status(200).json(users);

        } catch (error) {

            res.status(500).json({
                message: error,
            });

        }
    },
    //replace all user data 
    delete: async (req, res) => {
        try {
            const { userId } = req.body;
            const result = await User.findByIdAndDelete(userId);
            res.status(202).json({
                message: "user was deleted succefully",
            });

        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    },
    //update some user data 
    update: async (req, res, next) => {
        try {
            const newUser = req.body;
            const result = await User.findByIdAndUpdate(newUser._id, newUser, { new: true });
            res.status(200).json(result);

        } catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    },
};