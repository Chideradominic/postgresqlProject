const { Pool } = require("pg");
const { config } = require("dotenv");
config();
module.exports = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  PORT: process.env.DB_PORT || 5432,
});
