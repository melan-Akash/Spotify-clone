# Full-Stack MERN Spotify Clone

A full-stack Spotify clone featuring a React player frontend, a dedicated React admin dashboard, and a Node.js/Express backend integrated with MongoDB and Cloudinary.

## Project Structure

This project is organized into three main components:
1. **/client**: The frontend client player built with React (Vite) and styled with Tailwind CSS. It connects to the backend API to fetch and play songs/albums.
2. **/spotify-admin**: The administrator dashboard built with React (Vite) and Tailwind CSS. It is used to upload new songs/albums and manage the database.
3. **/backend**: The backend API server built with Node.js, Express, and Mongoose. It uses Multer for handling file uploads and integrates with Cloudinary for cloud media storage.

---

## Features

### 🎧 Frontend Client (`/client`)
- Responsive Spotify UI layout with Sidebar, Navbar, and Player.
- Dynamic theme styling (main panel changes background gradient matching the current album's color).
- Full audio playback controls (Play, Pause, Next, Previous, Seek/Trackbar).
- Fetches real-time song and album data from the database.

### 🛠️ Admin Dashboard (`/spotify-admin`)
- UI forms to upload songs (MP3 files) and images.
- UI forms to create albums with custom background colors.
- Interactive list views to monitor and delete songs or albums directly from MongoDB.
- Real-time notification support via `react-toastify`.

### ⚙️ Backend API (`/backend`)
- REST API endpoints for Songs and Albums (`add`, `list`, `remove`).
- Seamless connection to **MongoDB Atlas**.
- Media file upload directly to **Cloudinary** using **Multer**.
- Structured error logging and clean response objects.

---

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Setup Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` root directory and fill in your credentials:
   ```env
   PORT=4000
   MONGODB_URI=your_mongodb_connection_uri
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   ```
4. Start the backend server:
   ```bash
   npm run server
   ```

### 2. Setup Admin Panel
1. Navigate to the admin directory:
   ```bash
   cd spotify-admin
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the admin development server:
   ```bash
   npm run dev
   ```
   *(By default, it will start on http://localhost:5174)*

### 3. Setup Frontend Client
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the client development server:
   ```bash
   npm run dev
   ```
   *(By default, it will start on http://localhost:5173)*

---

## Tech Stack
- **Frontend / Admin**: React.js, Vite, Tailwind CSS, Axios, React Router DOM, React Toastify
- **Backend**: Node.js, Express, MongoDB, Mongoose, Cloudinary, Multer, dotenv, CORS, nodemon