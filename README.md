# WorthVerse — Career-Focused Social Networking Platform

![MERN Stack](https://img.shields.io/badge/Stack-MERN-3c873a?style=for-the-badge)
![React](https://img.shields.io/badge/Frontend-React%2018-61dafb?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/API-Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT Auth](https://img.shields.io/badge/Auth-JWT%20%2B%20HttpOnly%20Cookies-2f2f2f?style=for-the-badge)

WorthVerse is a full-stack social platform designed for career growth, professional networking, and opportunity discovery.  
It combines profile building, feed-based engagement, job discovery, and connection management into one cohesive experience.

## 🚀 Key Highlights

- Professional profile creation and updates
- Feed with text + image post publishing
- Connection request lifecycle (send, accept, reject, withdraw, remove)
- Job listing discovery module
- User settings and account preferences
- Email-based signup verification
- JWT authentication with HTTP-only cookies

## 🧩 Technology Tags

`React` `Vite` `JavaScript` `Tailwind CSS` `Node.js` `Express.js` `MongoDB` `Mongoose` `REST API` `JWT` `Cookie-based Auth` `Multer` `Nodemailer` `ESLint`

## 🏗️ Architecture & Methodologies

- **Full-stack MERN architecture**
- **Modular backend design** (routes → controllers → models)
- **Schema-driven development** with Mongoose models
- **RESTful API approach** for client-server communication
- **Component-based frontend** using reusable React components
- **Authentication middleware pattern** for protected routes
- **Feature-oriented organization** across profile, posts, jobs, connections, and settings

## 📁 Project Structure

```text
WorthVerse/
├── Backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
├── Frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   └── Assets/
│   └── vite.config.js
└── README.md
```

## 🛠️ Tech Stack Details

### Frontend
- React 18
- Vite 6
- React Router
- Axios
- Tailwind CSS
- React Modal

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Multer (file upload)
- Nodemailer (email verification)
- Cookie Parser + CORS

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB instance (local or cloud)

### 1) Clone the repository

```bash
git clone https://github.com/shrey416/WorthVerse.git
cd WorthVerse
```

### 2) Setup Backend

```bash
cd Backend
npm install
npm start
```

Backend runs at: `http://localhost:5000`

### 3) Setup Frontend

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

## 🔐 Environment Variables (Backend)

Create `/Backend/.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_for_nodemailer
EMAIL_PASS=your_email_app_password
```

## 📌 Core API Modules

- `/api/auth` → signup, login, logout, auth check, verification code
- `/api/profile` → profile read/update flows
- `/api/posts` → feed retrieval and post creation with image upload
- `/api/connections` → complete connection request lifecycle
- `/api/jobs` → job listing retrieval
- `/api/settings` → account/privacy/security/user preference updates
- `/api/user` → user-related endpoints

## 📜 Available Scripts

### Frontend
- `npm run dev` — run development server
- `npm run build` — create production build
- `npm run preview` — preview production build
- `npm run lint` — lint frontend code

### Backend
- `npm start` — start backend server

## 🧠 Key Skills Demonstrated

- Full-Stack Web Development (MERN)
- REST API Design & Integration
- Authentication & Authorization
- Backend Middleware Design
- Database Modeling with MongoDB
- File Upload Handling
- State-Driven UI Development
- Modular Codebase Organization
- Professional Feature Design for Social Platforms

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
