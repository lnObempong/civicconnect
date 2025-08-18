Community Issue Reporting App

A React-based web application that allows users to report community issues by providing a title, description, category, region, exact location via an interactive map, and an optional photo upload. This app is designed to help citizens report issues like sanitation, security, water, electricity, education, and environment.

📌 Features

✅ User Authentication – Basic login with username & password
✅ Report Submission Form – Title, Description, Category, Region
✅ Interactive Map – Select an exact location & auto-fetch address
✅ Photo Upload Option – Attach an image of the issue
✅ Region Support – All 16 regions of Ghana
✅ Navigation – Redirect after successful submission
✅ Responsive UI – Styled with Tailwind CSS

🛠 Tech Stack

Frontend: React (Hooks)

Routing: react-router-dom

Map: Google Maps API (or Leaflet if configured)

Styling: Tailwind CSS

State Management: useState

Optional Upload: HTML5 file input

📂 Project Structure
src/
├── components/
│   └── MapSelector.jsx       # Handles map display & location selection
├── pages/
│   ├── Login.jsx             # Basic login page
│   ├── SubmitReport.jsx      # Report submission form
│   └── Dashboard.jsx         # Placeholder for dashboard
├── App.js                    # App routes
├── index.js                  # Entry point

🚀 Installation
1. Clone the Repository
git clone https://github.com/your-username/community-reporting-app.git
cd community-reporting-app

2. Install Dependencies
npm install

3. Set Up Environment Variables

Create a .env file in the root folder and add your Google Maps API Key:

REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here

4. Start the Development Server
npm start

📖 How It Works
1. Login

Navigate to /login

Use credentials:
Username: user
Password: pass

2. Submit a Report

Navigate to /submit-report

Fill:

Title

Description

Category

Region (loads map dynamically)

Select a location on the map

Upload an optional photo

Click Submit Report

Redirect to /dashboard

📸 Screenshots (Add Later)

Login Page

Report Form

Map Location Selection

Dashboard

🗺 Supported Regions

Greater Accra

Ashanti

Western

Western North

Central

Eastern

Volta

Oti

Northern

Savannah

North East

Upper East

Upper West

Bono

Bono East

Ahafo

📦 Example Report Object
{
  "title": "Broken Water Pipe",
  "description": "Water pipe leaking near the main junction.",
  "category": "water",
  "region": "Greater Accra",
  "location": {
    "lat": 5.560014,
    "lng": -0.205744,
    "address": "Osu, Accra"
  },
  "photo": "file.jpg",
  "date": "08/18/2025, 10:30:00"
}

✅ Future Enhancements

🔐 Secure Authentication (JWT)

🖼 Photo Preview before upload

☁ Upload to Cloud (Firebase/S3)

📊 Dashboard with filters (region, category)

📱 Mobile Responsive Design

🌐 Backend API (Node.js, Express, MongoDB)

📜 License

This project is open-source under the MIT License.# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
