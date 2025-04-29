const pg = require('../config/db');

const table = 'portfolio.project';

const fetchProject = async () => {
  try {
    const sql = `
      SELECT * FROM ${table}
    `;

    return await pg.any(sql);
  } catch (err) {
    throw new Error('Error fetching social: ' + err.message);
  }
};
  
module.exports = {
  fetchProject
};  