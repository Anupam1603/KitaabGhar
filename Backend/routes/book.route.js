import express from 'express'
import { getBookById, getBook, addBook } from '../controller/book.controller.js'

const router = express.Router()

router.get("/", getBook);

router.get("/:id", getBookById);

router.post("/", addBook); 

export default router;