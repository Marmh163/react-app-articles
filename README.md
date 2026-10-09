React Articles

A full-stack article management application built with React, Node.js, Express, and MongoDB. The project provides article management, search and filtering, pagination, and JWT-based authentication through a responsive user interface.

🚀 Live Demo

View Live Demo

✨ Features

🔐 User registration and login

🛡️ JWT-based authentication

📝 Create, read, update, and delete articles (CRUD)

🔎 Search articles by keyword

🏷️ Filter articles by category

↕️ Sort articles

📄 Paginated article listing

📖 Article details page

🔒 Protected article operations

⚡ Loading and error handling

📱 Responsive user interface

🔔 User feedback with SweetAlert2

🛠️ Tech Stack

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

JSON Web Token (JWT)

bcrypt

fastest-validator

📂 Project Structure

react-app-articles/ ├── src/ # React frontend ├── public/ # Static frontend assets ├── articles-api/ # Express backend │ ├── config/ # Database configuration │ ├── middlewares/ # Authentication and error handling │ ├── models/ # Mongoose models │ ├── routes/ # API routes │ ├── validators/ # Request validation │ └── app.js # Backend entry point ├── package.json └── README.md 

⚙️ Getting Started

Prerequisites

Node.js and npm

MongoDB database

Git

1. Clone the repository

git clone https://github.com/Marmh163/react-app-articles.git cd react-app-articles 

2. Install frontend dependencies

npm install 

3. Configure environment variables

Create a .env file inside articles-api/ and configure the required backend environment variables.

Example:

PORT=5000 MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_jwt_secret 

Important: Use your own database connection string and a secure JWT secret. Never commit .env files or credentials to GitHub.

4. Start the backend

cd articles-api npm install node app.js 

5. Start the frontend

Open a second terminal in the frontend root directory:

npm run dev 

Open the local URL displayed by Vite in your terminal.

🔑 Authentication

The application uses JSON Web Tokens (JWT) to authenticate users.

Users can register and log in.

Passwords are hashed using bcrypt.

The JWT is stored in localStorage after login.

Protected requests send the token through the Authorization header.

Article creation, editing, and deletion require authentication.

🔌 API

The backend provides REST API endpoints for:

Users: registration, login, and authenticated user information

Articles: listing, retrieving details, creating, updating, and deleting articles

The frontend communicates with the backend through HTTP requests.

🗄️ Database

MongoDB stores application data in the articles_db database, including article and user documents. Mongoose is used to define models and interact with the database.

🌐 Deployment

Frontend: Netlify

Backend: Railway

Database: MongoDB Atlas

🔮 Future Improvements

Associate articles with their authors

Add a user profile page

Improve accessibility and UI polish

Add automated tests

Enhance security and authentication flows

👩‍💻 Author

Maryam Mahmoudi

⭐ If you find this project interesting, feel free to explore the live demo and source code.