const model = require('../models/social.model');

exports.fetchSocial = async (req, res) => {
    try {
        const result = await model.fetchSocial();
        res.status(200).json({
            message: 'Fetch social',
            data: result
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error fetching social', 
            error: error.message 
        });
    }
};

exports.createSocial = async (req, res) => {
    try {
        await model.createSocial(req.body);
        res.status(200).json({
            message: 'Create social'
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error create social', 
            error: error.message 
        });
    }
};

exports.updateSocialById = async (req, res) => {
    try {
        await model.updateSocialById(req.body, req.params.id);
        res.status(200).json({
            message: 'Update social'
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error update social', 
            error: error.message 
        });
    }
};

exports.deleteSocialById = async (req, res) => {
    try {
        await model.deleteSocialById(req.params.id);
        res.status(200).json({
            message: 'Delete social'
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error delete social', 
            error: error.message 
        });
    }
};