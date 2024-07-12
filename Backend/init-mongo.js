import mongoose from "mongoose";
import Book from "./model/book.model.js"; // Adjust the path accordingly

const mongoURL = 'mongodb://mongo:27017';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
console.log("Connected to MongoDB");

    
    // Check if the collection already exists
    const collections = await mongoose.connection.db.listCollections({ name: 'books' }).toArray();
    if (collections.length === 0) {
        // If the collection doesn't exist, create it and insert an initial document
        const book = new Book({
            name: "Example Book",
            price: 20,
            category: "Fiction",
            iamge: "image_url",
            title: "Example Title"
        });
        await book.save();
        console.log("Book collection created and initial document inserted");
    } else {
        console.log("Book collection already exists");
    }

    mongoose.connection.close();
});