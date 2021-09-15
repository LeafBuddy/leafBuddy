const { Pool } = require('pg');
const our_username = process.env.DBUSERNAME;
const our_password = process.env.DBPASSWORD;
const our_database = process.env.DBNAME;
// eslint-disable-next-line max-len
const uri = `postgres://${our_username}:${our_password}@36ed0620020c572f2d626c93b36180bc.postgres.database.azure.com:5432/${our_database}?sslmode=require`;

// Connect to our database and assign the result of that connection to a new object
// Then export that object so that we can make queries to our DB.
// This object is used inside of our controllers.

const pool = new Pool({
  connectionString: uri,
}
);

module.exports = pool;


