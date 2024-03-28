import bookResolvers from "../resolvers/resolvers.js"
import express from "express";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

const router = express.Router();

router.get("/books", (_req, res) => {
    const books = bookResolvers.Query.books;
    res.send(books).status(200);
});



