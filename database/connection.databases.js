import 'dotenv/config'
import pg from 'pg'

const {Pool} = pg
const connectionString = process.env.DATABASE_URL
export const db = new Pool({
    allowExitOnIdle:true,
    connectionString  // Reemplaza con tus credenciales

})

try {
    await db.query('SELECT NOW()')
    console.log('database connected...');
} catch (error) {
    console.log(error);
}