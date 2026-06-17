# TalentForge AI

AI-powered Resume & Interview Preparation Platform built with the MERN stack.

TalentForge AI helps users upload resumes, get ATS scores, find weak resume sections, generate interview questions, practice mock interviews, and track preparation progress from one dashboard.

## Features

- AI resume analyzer
- ATS score generation
- Resume weak-section analysis
- Best-fit role suggestions
- Missing keyword detection
- AI interview question generation
- Role-based mock interviews
- Resume builder with PDF export
- Dashboard analytics
- JWT authentication
- MongoDB data storage

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Axios
- Zustand
- Recharts
- React Dropzone
- jsPDF

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer
- pdf-parse
- Tesseract.js OCR
- Zod
- Winston
- Helmet

### AI

- OpenAI-ready
- Gemini-ready
- Local AI fallback for demos without API keys

## Main Modules

- `frontend/` - React frontend and dashboard
- `backend/` - Express API and MongoDB logic
- `backend/src/models/` - database schemas
- `backend/src/controllers/` - API controllers
- `backend/src/services/` - AI and resume parsing logic
- `backend/src/routes/` - REST API routes

## API Routes

### Auth

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/auth/me`

### Resume

- `GET /api/resumes`
- `POST /api/resumes/upload`
- `POST /api/resumes/:id/analyze`

### Interview

- `GET /api/interviews`
- `POST /api/interviews/generate`
- `POST /api/interviews/:id/answer`

### Analytics

- `GET /api/analytics/overview`

Run frontend : npm run dev:frontend
Run backend : npm run dev:backend

frontend URL : http://localhost:5173
Backend URL : http://localhost:8080/health

How It Works
- User signs up or logs in
- User uploads a resume
- Backend extracts resume text using PDF parsing or OCR
- AI analyzer generates ATS score and improvement feedback
- Dashboard shows missing keywords, weak sections, and best-fit roles
- User generates interview questions
- User practices mock interviews based on selected role


Deployment

  Frontend:

- Deploy on Vercel
- Set VITE_API_URL to backend deployed URL

  Backend:

- Deploy on Render or Railway
- Use MongoDB Atlas for production database

  
Resume Highlights
This project demonstrates:

- MERN stack development
- Authentication with JWT
- File upload handling
- PDF parsing and OCR
- AI integration architecture
- MongoDB schema design
- REST API development
- Dashboard analytics
- Responsive UI design
- Production-style backend structure

  Future Improvements
- Voice-based mock interviews
- Stripe subscription billing
- Cloudinary or S3 upload storage
- Redis caching
- Admin dashboard
- CI/CD pipeline
- Docker Compose setup


