const { Pool } = require("pg");

const config = {
    user: 'walterpacheco',
    host: 'localhost',
    database: 'Users', 
    password: '', 
    port: 5432                
};

const pool = new Pool(config);

module.exports = pool; 
