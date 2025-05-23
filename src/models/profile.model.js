const pg = require('../config/db');

const table = 'portfolio.profile';

const fetchProfile = async () => {
  try {
    const sql = `
      SELECT
        name,
        title,
        description,
        image
      FROM ${table}
        WHERE id=1
    `;

    return await pg.one(sql);
  } catch (err) {
    throw new Error('Error fetching profile: ' + err.message);
  }
};

const updateProfile = async (data) => {
  try {
    const sql = `
      UPDATE ${table} SET
        name = $1, 
        title = $2,
        description = $3
        WHERE id=1
    `;

    return await pg.none(sql, [data.name, data.title, data.description]);
  } catch (err) {
    throw new Error('Error fetching profile: ' + err.message);
  }
};
  
module.exports = {
  fetchProfile,
  updateProfile
};  