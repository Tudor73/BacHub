import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'project',
    password: 'nanopicu',
    port: 5432,
});




