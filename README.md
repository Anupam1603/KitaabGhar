# Bookstore App
- Welcome to the Bookstore App! This application allows users to manage a collection of books with full CRUD (Create, Read, Update, Delete) functionalities.

## Features
- Add new books to the store
- View a list of all books
- Update book details
- Delete books from the store
## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- RESTful APIs
- Getting Started
- Prerequisites
### Ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)
- MongoDB
## Installation

Clone the repository:
```
git clone https://github.com/Anupam1603/KitaabGhar.git
```

Install the dependencies:
```
npm install
```
Set up the environment variables:

- Create a .env file in the root directory of the project and add the following variables:
```
MONGO_URI=your_mongodb_connection_string
PORT=your_preferred_port (default is 3000)
```
- MONGO_URI: Your MongoDB connection string. This can be obtained from your MongoDB Atlas account or your local MongoDB setup.
- PORT: The port number on which your app will run. Default is 3000.
## API Endpoints
Here are the API endpoints available in the Bookstore App:

- GET /books - Retrieve a list of all books
- GET /books/:id - Retrieve a single book by its ID
- POST /books - Add a new book
- PUT /books/:id - Update an existing book by its ID
- DELETE /books/:id - Delete a book by its ID
