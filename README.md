# Job Portal

A modern, full-stack job portal application built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform allows users to browse job listings, apply for positions, and enables companies to post job openings and manage applications.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Usage](#usage)

## ✨ Features

### For Job Seekers
- Browse and search job listings by category
- View detailed job descriptions
- Apply for jobs with one click
- Track applied jobs
- Update user profile with resume and avatar
- Filter jobs by company and category

### For Companies
- Post new job openings
- Manage job listings
- View applicant profiles
- Track applications
- Company profile management
- Set up company information

### General Features
- User authentication (Login/Signup)
- Role-based access control (User/Admin)
- Responsive design with Tailwind CSS
- Modern UI components
- Real-time notifications with Sonner
- File upload with Cloudinary
- Protected routes for authenticated users

## 🛠 Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Redux** - State management
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **Firebase** - Authentication
- **Cloudinary** - Image hosting
- **Sonner** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Multer** - File upload middleware
- **Cloudinary** - Image storage
- **JWT** - Authentication tokens

## 📁 Project Structure

```
project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/          # Admin-specific components
│   │   │   ├── auth/           # Authentication components
│   │   │   ├── shared/         # Shared components (Navbar, Footer)
│   │   │   ├── ui/             # Reusable UI components
│   │   │   └── ...             # Other page components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── redux/              # Redux store and slices
│   │   ├── utils/              # Utility functions
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   ├── tailwind.config.cjs
│   └── package.json
│
├── backend/
│   ├── controllers/            # Route controllers
│   ├── models/                 # MongoDB schemas
│   ├── routes/                 # API routes
│   ├── middlewares/            # Express middlewares
│   ├── utils/                  # Utility functions
│   ├── index.js               # Server entry point
│   └── package.json
│
└── README.md
```

## 📦 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (Local or MongoDB Atlas account)

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Saurabh6372/Job-Portal.git
cd Job-Portal
```

### 2. Backend Setup

Navigate to the backend folder:
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory with the following variables:
```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 3. Frontend Setup

Navigate to the frontend folder:
```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory with the following variables:
```
VITE_BACKEND_URL=http://localhost:8000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
```

## 🎯 Running the Project

### Quick Start - Simple Commands

**To run the Backend:**
```bash
cd backend
npm run dev
```
The backend will start on `http://localhost:8000`

**To run the Frontend:**
```bash
cd frontend
npm run dev
```
The frontend will start on `http://localhost:5173`

### Running Both Servers

Open two separate terminals:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Visit `http://localhost:5173` in your browser to view the application.

## 💻 Usage

### For Job Seekers:
1. Sign up or log in to your account
2. Browse jobs from the home page or search by category
3. Click on a job to view full details
4. Click "Apply Now" to submit your application
5. Check "Applied Jobs" to track your applications
6. Update your profile with resume and information

### For Companies/Admin:
1. Sign up as a company or admin
2. Go to "Settings" to set up your company profile
3. Navigate to "Create Job" to post new job openings
4. View all posted jobs in "Admin Jobs"
5. Click on jobs to view and manage applications
6. Accept or reject applicants

## 📚 API Endpoints

### User Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Job Endpoints
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get job details
- `POST /api/jobs` - Create job (Admin only)
- `PUT /api/jobs/:id` - Update job (Admin only)
- `DELETE /api/jobs/:id` - Delete job (Admin only)

### Application Endpoints
- `POST /api/applications` - Apply for a job
- `GET /api/applications` - Get user applications
- `GET /api/applications/job/:id` - Get job applications

### Company Endpoints
- `GET /api/companies` - Get all companies
- `GET /api/companies/:id` - Get company details
- `POST /api/companies` - Create company
- `PUT /api/companies/:id` - Update company

## 🔐 Authentication

This project uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## 📝 Environment Variables

### Backend (.env)
```
PORT=8000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/jobportal
JWT_SECRET=your_super_secret_jwt_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Frontend (.env)
```
VITE_BACKEND_URL=http://localhost:8000
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Push your code to GitHub
2. Connect your repository to Vercel/Netlify
3. Set environment variables
4. Deploy

### Backend (Heroku/Railway/Render)
1. Create account on hosting platform
2. Connect your GitHub repository
3. Set environment variables
4. Deploy

## 📞 Support

For issues, feature requests, or questions, please create an issue in the GitHub repository.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Saurabh**

- GitHub: [@Saurabh6372](https://github.com/Saurabh6372)

---

**Happy Job Hunting! 🎉**
