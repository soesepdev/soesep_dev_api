const model = require('../models/project.model');

exports.fetchProject = async (req, res) => {
    try {
        const result = await model.fetchProject();
        res.status(200).json({
            message: 'Fetch project',
            data: result
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Error fetching project', 
            error: error.message 
        });
    }
};