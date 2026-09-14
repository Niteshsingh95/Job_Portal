# 💼 Job Portal - MERN Stack

## 👨‍💻 Author

**Nitesh Singh**

- GitHub: https://github.com/Niteshsingh95
- LinkedIn: https://www.linkedin.com/in/nitesh-singh-45031028a/
- Live:https://job-portal-gcn5.onrender.com/

---

Role: Recruiter
Email: Sumitsingh@gmail.com
Password: sumitsingh


Role: Student
Email: nitesh11@gmail.com
Password: nites


A full-stack **Job Portal** web application built using the **MERN Stack** that connects **job seekers** with **recruiters**. Students can search and apply for jobs, while recruiters can manage companies, post jobs, and review applications through a secure and user-friendly platform.

---

## 🚀 Features

### 👨‍🎓 Student

- User Registration & Login
- JWT Authentication
- Browse Available Jobs
- Search & Filter Jobs
- Apply for Jobs
- Upload Resume (PDF)
- Update Profile
- View Applied Jobs
- Track Application Status (Pending / Accepted / Rejected)

### 👨‍💼 Recruiter

- Recruiter Authentication
- Register & Manage Companies
- Create New Jobs
- Update/Delete Jobs
- View Applicants
- Accept or Reject Applications
- Manage Posted Jobs

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- Shadcn UI
- Lucide React
- Sonner

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- Cloudinary
- Cookie Parser
- CORS
- Dotenv

---

## 📂 Project Structure

```
JobPortal/
│
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── index.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── redux/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
│
└── README.md
```

---

## 🔑 Key Features

- Role-Based Authentication (Student & Recruiter)
- Secure JWT Authentication
- Password Encryption using bcrypt
- RESTful APIs
- Resume Upload using Cloudinary
- Redux Toolkit State Management
- Responsive User Interface
- Protected Routes
- CRUD Operations
- Application Status Tracking

---

## 🔄 Authentication Flow

1. User registers or logs in.
2. Password is encrypted using **bcrypt**.
3. Server generates a **JWT Token**.
4. JWT is stored inside an **HTTP-only Cookie**.
5. Authentication middleware verifies every protected request.
6. User data is securely accessed using the token.

---

## 📊 Database Collections

### User

- Full Name
- Email
- Phone Number
- Password
- Role
- Profile
- Skills
- Resume
- Profile Photo

### Company

- Company Name
- Description
- Website
- Location
- Logo

### Job

- Title
- Description
- Salary
- Experience
- Requirements
- Company
- Recruiter

### Application

- Applicant
- Job
- Status
- Applied Date

---

## ☁️ Cloudinary Integration

The project uses **Cloudinary** to upload and store:

- Resume (PDF)
- Profile Photo

Only secure URLs are stored in MongoDB.

---

## 🔒 Security Features

- JWT Authentication
- HTTP-only Cookies
- Password Hashing
- Role-Based Authorization
- Protected APIs
- Duplicate Job Application Prevention




## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Niteshsingh95/job-portal.git
```

---

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

SECRET_KEY=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

---

## 📌 Future Improvements

- Email Notifications
- Interview Scheduling
- AI Job Recommendations
- Resume Parsing
- Real-time Chat
- Admin Dashboard
- Pagination
- Advanced Search Filters

---

## 🎯 Learning Outcomes

This project helped me gain practical experience in:

- Full Stack MERN Development
- REST API Development
- Authentication & Authorization
- MongoDB Relationships
- Redux Toolkit
- Cloudinary Integration
- File Uploads
- Protected Routes
- State Management
- Responsive UI Design
- Error Handling
- CRUD Operations

---


## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
