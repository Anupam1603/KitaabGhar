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
### Requirements
Only Docker !

## Installation

Clone the repository:
```
git clone https://github.com/Anupam1603/KitaabGhar.git
```

Install the dependencies:
```
cd KitaabGhar/Backend
docker compose build --no-cache
docker compose up

```
## API Endpoints
Here are the API endpoints available in the Bookstore App:
The service will be running on https://localhost:3000
- GET /books - Retrieve a list of all books
- GET /books/:id - Retrieve a single book by its ID
- POST /books - Add a new book
- PUT /books/:id - Update an existing book by its ID
- DELETE /books/:id - Delete a book by its ID
