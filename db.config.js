const { Pool }  = require('pg');
const dotenv = require("dotenv");
dotenv.config({path: "../db.env"}) 

let pgsqlConn;

if(process.env.DB_ENVIRONMENT == "production"){
    pgsqlConn = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}
else{
    pgsqlConn = new Pool({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        port: process.env.DATABASE_PORT,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE
    });
}


pgsqlConn.connect(function (err) {
    if (err) throw err;
    else console.log("Database Connected!");
});

module.exports = pgsqlConn;