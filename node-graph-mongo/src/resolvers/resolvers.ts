import db from "../mongo/connection.js"
import {Document} from "mongodb";

const bookResolvers = {
    Query: {
        async books(): Promise<Document[]> {
            const collection = await db.collection("books");
            const booksData = await collection.find({}).toArray();
            //console.log("books {}" , booksData);
            return booksData;
        }
    }
}

export default bookResolvers;