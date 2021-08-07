import postgres from 'pg';
import { promises } from 'fs';

const { Pool } = postgres;

const pool = new Pool(
    process.env.DATABASE_URL === undefined ? {
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
    } :
    {
        connectionString: process.env.DATABASE_URL,
    }
);

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

async function deleteDatabase() {
    console.log("Trying to delete database");
    const sql = await promises.readFile(
        './src/db/sql/core/delete.sql',
        'utf-8',
    );
    try {
        await pool.query(sql);
        console.log("Database deleted");
        return;
    } catch {
        console.log("Database couldn't be accessed");
    }
}

export { pool, initializeDatabase, deleteDatabase };
