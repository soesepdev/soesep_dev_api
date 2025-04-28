const pg = require('../config/db');

const table = 'portfolio.profile';

const getProfile = async () => {
    try {
      const sql = `
      SELECT 
        name, 
        title 
      FROM ${table}
        WHERE id=1
      `;

      return await pg.one(sql);
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw new Error('Error fetching profile: ' + error.message);
    }
};

const updateProfile = async (data) => {
  try {
    const profile = {}; 
    if (!profile) {
      throw new Error('Profile not found');
    }
    return profile;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw new Error('Error fetching profile: ' + error.message);
  }
};
  
module.exports = {
    getProfile,
    updateProfile
};  