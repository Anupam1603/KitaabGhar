import Book from "../model/book.model.js";

export const getBook = async (req,res) => {
    
    try {
        const book =await Book.find();
        res.status(200).json(book)
    } catch (error) {
        console.log("Error: ", error)
    }
}

export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book == null) {
            return res.status(404).json({ message: 'Cannot find book' });
        }
        res.status(200).json(book);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ message: 'Invalid book ID' });
        }
        res.status(500).json({ message: err.message });
    }
};

export const addBook = async (req, res) => {
    const book = new Book({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,  // Fixed typo from "iamge"
        title: req.body.title
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook); // 201 Created
    } catch (err) {
        res.status(400).json({ message: err.message }); // 400 Bad Request
    }
};