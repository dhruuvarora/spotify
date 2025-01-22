# Spotify

A Spotify Clone built with the MERN stack (MongoDB, Express, React, Node.js) and Passport.js with JWT authentication. The application allows users to manage playlists, upload songs, and interact with other users in a way similar to Spotify.

Features
User Authentication: Register, log in, and authenticate users using JWT tokens.
Playlist Management: Users can create and manage their own playlists.
Song Management: Users can upload and manage their songs.
Collaborators: Users can collaborate on playlists.
Like and Share: Users can like songs and share playlists.
Tech Stack
Frontend: React.js, Redux (if used)
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ORM)
Authentication: Passport.js, JWT (JSON Web Tokens)
Cloud Storage: (Optional if you're using services like AWS S3 or Google Cloud for file storage)
State Management: Redux (Optional)
Styling: (Add if you're using CSS frameworks or libraries like Bootstrap, Material UI, or custom styling)
Installation
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/spotify-clone.git
cd spotify-clone
2. Set Up Backend
Navigate to the backend folder and install dependencies:

bash
Copy
Edit
cd backend
npm install
Create a .env file in the root of the backend project and add the following configuration:

plaintext
Copy
Edit
MONGO_PASSWORD=yourMongoPassword
JWT_SECRET=yourJWTSecret
3. Set Up Frontend
Navigate to the frontend folder and install dependencies:

bash
Copy
Edit
cd frontend
npm install
4. Run the Application
Start both the backend and frontend servers:

Backend (Node.js):

bash
Copy
Edit
cd backend
npm start
Frontend (React.js):

bash
Copy
Edit
cd frontend
npm start
The app will run on:

Backend: http://localhost:8000
Frontend: http://localhost:3000
API Endpoints
User Authentication
POST /auth/register: Registers a new user.

Request Body: { email, password, firstName, lastName, username }
Response: { user, token }
POST /auth/login: Logs in an existing user.

Request Body: { email, password }
Response: { user, token }
Song Management
POST /song/create: Upload a new song.

Request Body: { name, thumbnail, track }
Authorization: Bearer Token
Response: { song }
GET /song/get/mysongs: Get all songs uploaded by the authenticated user.

Authorization: Bearer Token
Response: { songs }
Playlist Management
POST /playlist/create: Create a new playlist.

Request Body: { name, thumbnail }
Authorization: Bearer Token
Response: { playlist }
GET /playlist/get: Get all playlists of the authenticated user.

Authorization: Bearer Token
Response: { playlists }
