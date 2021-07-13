import postgres from 'pg';
import { promises } from 'fs';

const { Pool } = postgres;

const pool = new Pool({
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
});

async function initializeDatabase() {
    console.log("Trying to initialize database");
    const sql = await promises.readFile(
        './src/db/sql/core/init.sql',
        'utf-8',
    );
    try {
        await pool.query(sql);
        console.log("Database initialized");
        return;
    } catch {
        console.log("Database couldn't be initialized");
    }
}

export { pool, initializeDatabase };
