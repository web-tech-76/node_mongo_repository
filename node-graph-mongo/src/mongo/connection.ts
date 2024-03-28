import * as dotenv from 'dotenv'
import {MongoClient} from "mongodb";

dotenv.config()
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

let conn:MongoClient | any;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);

    console.log(`\n\nYou must set the ATLAS_URI environment variable in the .env file`);
}

let db = conn.db("test");

export default db;