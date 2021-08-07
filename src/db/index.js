import postgres from 'pg';
import { promises } from 'fs';

const { Pool } = postgres;

const devConfig = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/${process.env.PGDATABASE}`;
const prodConfig = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString: process.env.NODE_ENV === "production" ? prodConfig : devConfig,
    ssl: {
        rejectUnauthorized: false,
    }
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
    } catch (err) {
        console.log("Database couldn't be initialized");
        console.log(err);
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
