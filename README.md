# Speaking Test Report Application

## Project Overview
This project is a Speaking Test Report web application developed as part of an internship assignment.
It displays a candidate’s speaking performance in a Speechace-style report format.

## ▶️ How to Run the Project

### Backend
- cd backend
- npm install express cors
- node server.js

### Frontend
- cd frontend
- npm install
- npm start

##  Where the Scores Are Stored
Scores are stored in backend/data/report.json as JSON.

##  How Feedback Logic Works
- Score ≥ 8 → Excellent performance
- Score 6–7 → Good performance
- Score < 6 → Needs improvement

The feedback updates automatically when scores change.

# Output
 <img src="/Screenshot 2025-12-24 221304.png">