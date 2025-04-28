const model = require('../models/profile.model');

exports.getProfile = async (req, res) => {
    try {
        const result = await model.getProfile();
        console.log(result)
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
        const result = model.getProfile();
        res.status(200).json({
            message: 'Update profile',
            data: result
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error update profile', 
            error: error.message 
        });
    }
};