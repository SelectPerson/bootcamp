const config = require('../config');

module.exports = async (req, res, next) => {
    if (req.headers.authorization !== config.authToken) {
        return res.status(401).json({ success: false, message: 'INVALID_TOKEN' });
    }

    next();
};