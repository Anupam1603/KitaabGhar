import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import bookRoute from "./routes/book.route.js"
const app = express()

dotenv.config()
app.use(cors())
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;

// connect to mongoDB
try {
    mongoose.connect(URI)
  .then(() => console.log('Connected!'));
} catch (error) {
    console.log("Error :", error)
}


//Defining routes
app.use("/book",bookRoute)



app.listen(PORT, () =>{
    console.log(`Server running on the port ${PORT} `)
})