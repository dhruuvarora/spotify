# Spotify Clone

A full-fledged Spotify Clone built using the MERN stack (MongoDB, Express, React, Node.js) with Passport.js for authentication and Cloudinary for media storage. Future development plans include integrating the Spotify API for streaming and AI/ML-based song recommendations.

## Features
- **User Authentication**: Register, login, and authenticate users using JWT tokens.
- **Playlist Management**: Users can create and manage their own playlists.
- **Song Upload & Management**: Users can upload songs, with files stored in Cloudinary.
- **Collaborative Playlists**: Users can collaborate on playlists.
- **Like & Share**: Users can like songs and share playlists.
- **Real-Time Updates**: WebSockets for real-time interactions (Future feature).
- **AI/ML-Based Song Recommendations** (Planned): Using ML models to suggest songs based on user behavior.
- **Spotify API Integration** (Planned): Fetch and play songs directly using the Spotify API.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: Passport.js, JWT
- **Media Storage**: Cloudinary
- **Styling**: Material UI / Tailwind CSS (Optional)

## Installation
### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/spotify-clone.git
cd spotify-clone
```

### 2. Set Up Backend
Navigate to the backend folder and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the root of the backend project and add the following configuration:
```plaintext
MONGO_URI=yourMongoDBConnectionString
JWT_SECRET=yourJWTSecret
CLOUDINARY_CLOUD_NAME=yourCloudinaryCloudName
CLOUDINARY_API_KEY=yourCloudinaryAPIKey
CLOUDINARY_API_SECRET=yourCloudinaryAPISecret
```

### 3. Set Up Frontend
Navigate to the frontend folder and install dependencies:
```bash
cd frontend
npm install
```

### 4. Run the Application
Start both the backend and frontend servers:
#### Backend (Node.js):
```bash
cd backend
npm start
```
#### Frontend (React.js):
```bash
cd frontend
npm start
```

The app will run on:
- **Backend**: [http://localhost:8000](http://localhost:8000)
- **Frontend**: [http://localhost:3000](http://localhost:3000)

## API Endpoints
### User Authentication
- **POST `/auth/register`**: Registers a new user.
  - Request Body: `{ email, password, firstName, lastName, username }`
  - Response: `{ user, token }`
- **POST `/auth/login`**: Logs in an existing user.
  - Request Body: `{ email, password }`
  - Response: `{ user, token }`

### Song Management
- **POST `/song/create`**: Upload a new song.
  - Request Body: `{ name, thumbnail, track }`
  - Authorization: Bearer Token
  - Response: `{ song }`
- **GET `/song/get/mysongs`**: Get all songs uploaded by the authenticated user.
  - Authorization: Bearer Token
  - Response: `{ songs }`

### Playlist Management
- **POST `/playlist/create`**: Create a new playlist.
  - Request Body: `{ name, thumbnail }`
  - Authorization: Bearer Token
  - Response: `{ playlist }`
- **GET `/playlist/get`**: Get all playlists of the authenticated user.
  - Authorization: Bearer Token
  - Response: `{ playlists }`

## Future Development
- **Integrate Spotify API**: Fetch and play songs directly from Spotify.
- **AI/ML-Based Song Recommendations**: Use machine learning models to analyze user preferences and suggest songs.
- **WebSockets for Real-Time Features**: Enable real-time interactions like live playlist updates and song queues.

## Contributing
Feel free to fork this repository and contribute by submitting pull requests.
---
### 🚀 Happy Coding! 🎵
