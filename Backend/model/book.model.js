import mongoose from "mongoose";

//Defining a Schema
const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    iamge:String,
    title:String
})

//creating a model out of Schema

const Book = mongoose.model("Book ",bookSchema); //(collectionName,SchemaName)

export default Book;