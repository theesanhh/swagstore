const authController = {
    requireLogin: (req, res, next) => {
        if (req.session && req.session.user) return next();
        res.redirect('/login?error=1');
    }
};
module.exports = module.exports = authController;