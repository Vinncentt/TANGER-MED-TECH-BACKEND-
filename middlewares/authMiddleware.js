module.exports = {

    isAdmin: (req, res, next) => {
        if (req.session.role != 'Admin') {
            return res.status(401).json({
                message: 'only the admin can access this information'
            })
        }
        next();
    },
}