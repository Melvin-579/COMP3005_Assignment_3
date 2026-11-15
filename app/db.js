const { Pool } = require("pg");

// Create a connection pool for our PostgreSQL database
const pool = new Pool({
    user: "postgres", // Replace with your PostgreSQL username
    host: "localhost", // Replace with your PostgreSQL host
    database: "student_db",  // Replace with your database name you created in pgadmin 4
    password: process.env.DB_PASSWORD,
    port: 5432
});

// Export the pool so other files can use it
module.exports = pool;
