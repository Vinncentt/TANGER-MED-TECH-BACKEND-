const User = require('../../models/Users')
const bcrypt = require('bcrypt');
const Role = require('../../models/Roles');

module.exports = {

    login: async (req, res, next) => {
        try {
            const {
                email,
                password
            } = req.body;

            const user = await User.findOne({ email: email });
            !user && res.status(403).json({ message: "email credentials are false !" });

            const validated = await bcrypt.compare(password, user.password);
            !validated && res.status(403).json({ message: "password credentials are false !" });

            if (validated) {
                delete req.session.userId;
                delete req.session.role;
                let role = await Role.findById(user.role);
               
               
                req.session.userId = user._id;
                req.session.role = role.description;
                console.log(req.session.role);
                console.log(req.session.userId);
                res.status(200).json(user);
            }else{
                res.status(500).json({
                    message : "unothorized access"
                })
            }
        } catch (error) {
            next(error);
        }
    },
    logout: async (req, res,next) => {
        try {
            if (req.session.role) {

                delete req.session.role;

                res.status(200).json({
                    message: 'your are logged Out !'
                })
                res.end();
            } else {
                res.status(200).json({
                    message: 'your are already logged Out !'
                })
            }
        } catch (error) {

            next(error);
        }

    },
    resetPassword: async (req, res) => {


    },
};