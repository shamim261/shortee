# Shortee: URL Shortener

**Shortee** is a URL shortener web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to shorten long URLs into more manageable and shareable links. Below, I'll provide instructions for setting up both the backend and frontend components.

## Backend (Node.js, Express, MongoDB)

1. **Prerequisites:**

   - Node.js and npm installed on your system.
   - MongoDB set up (either locally or using a cloud service).

2. **Clone the Repository:**
   ```bash
   git clone https://github.com/shamim261/shortee
   cd shortee/backend
   ```

**Install Dependencies:**
```bash
npm install
```

**Environment Variables:** Create a .env file in the backend directory with the following variables:

```bash
APP_PORT=3100
MONGO_CONNECTION_STRING=mongodb://0.0.0.0/shortee-dev
JWT_SECRET=YOURSRCRET
JWT_EXPIRY=5h
```

**Run the Backend Server:**

```bash
npm start
```

API Endpoints:

- `POST /api/urls/`: Shorten a long URL.
- `POST /api/urls/:shortURL`: Delete a Shorten URL.
- `GET /api/urls/r/:shortUrl`: Redirect to the original URL.

  **Frontend (React)**
  Navigate to the Frontend Directory:

```bash
cd ../frontend
```

**Install Dependencies:**

```bash
npm install
```

Environment Variables: Create a .env file in the frontend directory with the following variables:

```bash
VITE_APP_URL=http://localhost:3100
VITE_BACKEND_URL=http://localhost:3100
```

**Run the Frontend Development Server:**

```bash
npm run dev
```

**Access the Application:** Open your browser and visit `http://localhost:3100`

**Deployment**
For production deployment, consider using services like Heroku, Vercel, or AWS. Set up environment variables accordingly for the production environment.

