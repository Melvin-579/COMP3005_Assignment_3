const { Pool } = require("pg");

// Create a connection pool for our PostgreSQL database
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "student_db",
    password: process.env.DB_PASSWORD,
    port: 5432
});

// Export the pool so other files can use it
module.exports = pool;
