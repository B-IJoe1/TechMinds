# Hack.Diversity Tech Dive Template

## Getting Started

This skeleton contains two different applications -- a front end, or "client," created with "Create React App," and a back end, or "API," created with Express. 

In order to make both of them work together, you'll need to run both, but you can run just one or the other to start. As you begin working on this project, you'll first focus on the client, so you can more or less ignore the API portion of the code for now.

## Client
In order to run the client, you'll run the following commands:

```bash
cd client/
npm i
npm start
```

You should then be able to visit `localhost:3000` in your browser and see the client running. If you make changes in the `App.js` file, you should see them reflected.

## API
In order to run the server, you'll run the following commands:

```bash
cd api/
npm i
npm start
```

You should then be able to visit `localhost:9000` in your browser and see the server running.
---

# Doctor's Notes App — Full Stack Exam Management System

A full-stack web application to manage patient exam data with a clean flow from database to frontend.

---

## Project Overview

This project demonstrates a **full flow** architecture for managing patient exams, built with:

- **Database:** MongoDB with Mongoose ORM  
- **Backend:** Express.js API for CRUD operations  
- **Frontend:** React.js client for interacting with the API  
- **Testing:** Mocha, Chai + mongodb-memory-server for integration tests  

---

## Architecture Breakdown

### 1. Database Layer  
- **File:** `models/examModel.js`  
- Defines the schema for Exam documents including fields like patientId, examId, keyFindings, bmi, brixiaScore, etc.  
- Handles data persistence, querying, updating, and deletion using MongoDB.

### 2. Backend Layer (API)  
- **Controllers:** `controllers/exam-controllers.js`  
  - CRUD business logic for exams:  
    - `getAllExams` — Get all exams  
    - `getExam` — Get exams by patientId  
    - `createExam` — Add new exam  
    - `updateExam` — Update exam by patientId  
    - `deleteExam` — Delete exam by _id  

- **Routes:** `routes/index.js`  
  - Maps HTTP routes to controller functions:  
    - `GET /api/index/` → all exams  
    - `GET /api/index/:patientId` → exams by patient  
    - `POST /api/index/admin` → create exam  
    - `PATCH /api/index/:patientId` → update exam  
    - `DELETE /api/index/:id` → delete exam  

- **App Initialization:** `app.js`  
  - Sets up Express middleware (CORS, JSON parsing)  
  - Connects to MongoDB via `.env` variables  
  - Mounts API routes  

### 3. Testing Layer  
- **Tests:** `test/exam.api.test.js`, `test.config.js`  
- Uses Mocha, Chai, chai-http for API testing  
- Uses mongodb-memory-server for isolated test DB  
- Covers full API lifecycle: create, read, update, delete exams  

### 4. Frontend Layer (React)  
- `ExamForm.js` — Form to submit new exams (POST)  
- `ExamUpdate.js` — Update exams (PATCH)  
- `PatientTable.js` — List exams by patient (GET)  
- `App.js` — React Router to switch views (/admin, /Details/:patientId, /updateExam/:patientId)  

---

## How to Run Locally

### Prerequisites
- Node.js (v16 or later recommended)  
- npm or yarn  
- MongoDB instance (local or remote)  

### Backend Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/doctors-notes-app.git
   cd doctors-notes-app
