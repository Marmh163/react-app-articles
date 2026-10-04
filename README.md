React Articles

A full-stack article management application built with React, Node.js, Express, and MongoDB.

Features

User registration and login

JWT-based authentication

Create, read, update, and delete articles

Search articles

Filter articles by category

Sort articles

Pagination

Article details page

Protected article routes

Loading and error handling

Responsive user interface

Technologies

Frontend

React

React Router

Bootstrap

Swiper

SweetAlert2

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT

bcrypt

fastest-validator

Project Structure

The project consists of two main parts:

src/ — React frontend

articles-api/ — Node.js and Express backend

Getting Started

1. Clone the repository

git clone https://github.com/Marmh163/react-app-articles.git

2. Install frontend dependencies

npm install

3. Start the frontend

npm start

4. Start the backend

Go to the backend directory:

cd articles-api

Install dependencies:

npm install

Then start the backend:

node app.js

Authentication

The application uses JSON Web Tokens (JWT) for authentication.

After login, the JWT token is stored in localStorage and is sent with protected requests using the Authorization header.

Protected operations include:

Creating articles

Editing articles

Deleting articles

API

The backend provides REST API endpoints for:

Users

Authentication

Articles

The frontend communicates with the backend through HTTP requests.

Database

The application uses MongoDB to store users and articles.

Future Improvements

User ownership for articles

User profile

Improved UI and accessibility

Deploy the frontend and backend

Add tests