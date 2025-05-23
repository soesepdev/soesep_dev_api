const model = require('../models/profile.model');

exports.fetchProfile = async (req, res) => {
    try {
        const result = await model.fetchProfile();
        res.status(200).json({
            message: 'Get profile',
            data: result
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error fetching profile', 
            error: error.message 
        });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        await model.updateProfile(req.body);
        res.status(200).json({
            message: 'Update profile'
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error update profile', 
            error: error.message 
        });
    }
};