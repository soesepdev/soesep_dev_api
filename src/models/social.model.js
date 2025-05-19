const pg = require('../config/db');

const table = 'portfolio.social';

const fetchSocial = async () => {
  try {
    const sql = `
      SELECT * FROM ${table} a ORDER BY a.name ASC
    `;

    return await pg.any(sql);
  } catch (err) {
    throw new Error('Error fetching social: ' + err.message);
  }
};

const createSocial = async (data) => {
  try {
    const sql = `
      INSERT INTO ${table}
        (name, url, icon)
      VALUES
        ($1, $2, $3)
    `;

    return await pg.none(sql, [data.name, data.url, data.icon]);
  } catch (err) {
    throw new Error('Error fetching social: ' + err.message);
  }
};

const updateSocialById = async (data, id) => {
  try {
    const sql = `
      UPDATE ${table} SET
        name = $1, 
        url = $2,
        icon = $3
        WHERE id=$4
    `;

    return await pg.none(sql, [data.name, data.url, data.icon, id]);
  } catch (err) {
    throw new Error('Error fetching social: ' + err.message);
  }
};

const deleteSocialById = async (id) => {
  try {
    const sql = `
      DELETE FROM ${table} 
        WHERE id=$1
    `;

    return await pg.none(sql, [id]);
  } catch (err) {
    throw new Error('Error fetching profile: ' + err.message);
  }
};
  
module.exports = {
  fetchSocial,
  createSocial,
  updateSocialById,
  deleteSocialById
};  