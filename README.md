
---

# **CivicConnect**

A **React-based web application** that allows users to **report community issues** by providing a title, description, category, region, exact location via an interactive map, and an optional photo upload. This app is designed to help citizens report issues like **sanitation, security, water, electricity, education, and environment**.

---

## **📌 Features**

✅ **User Authentication** – Basic login with username & password
✅ **Report Submission Form** – Title, Description, Category, Region
✅ **Interactive Map** – Select an exact location & auto-fetch address
✅ **Photo Upload Option** – Attach an image of the issue
✅ **Region Support** – All **16 regions of Ghana**
✅ **Navigation** – Redirect after successful submission
✅ **Responsive UI** – Styled with **Tailwind CSS**

---

## **🛠 Tech Stack**

* **Frontend:** React (Hooks)
* **Routing:** react-router-dom
* **Map:** Google Maps API (or Leaflet if configured)
* **Styling:** Tailwind CSS
* **State Management:** useState
* **Optional Upload:** HTML5 file input

---

## **📂 Project Structure**

```
src/
├── components/
│   └── MapSelector.jsx       # Handles map display & location selection
├── pages/
│   ├── Login.jsx             # Basic login page
│   ├── SubmitReport.jsx      # Report submission form
│   └── Dashboard.jsx         # Placeholder for dashboard
├── App.js                    # App routes
├── index.js                  # Entry point
```

---

## **🚀 Installation**

### 1. Clone the Repository

```bash
git clone https://github.com/lnObempong/civicconnect.git
cd civicconnect
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root folder and add your **Google Maps API Key**:

```
REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### 4. Start the Development Server

```bash
npm start
```

---

## **📖 How It Works**

### **1. Login**

* Navigate to `/login`
* Use credentials:
  **Username:** `user`
  **Password:** `pass123`

### **2. Submit a Report**

* Navigate to `/submit-report`
* Fill:

  * **Title**
  * **Description**
  * **Category**
  * **Region** (loads map dynamically)
* Select a location on the map
* Upload an optional photo
* Click **Submit Report**
* Redirect to `/dashboard`

---

## **📸 Screenshots **

* **Landing Page**
<img width="1366" height="768" alt="Screenshot (904)" src="https://github.com/user-attachments/assets/8b57479b-9aa5-464e-b547-1ced4ab58854" />

 * **Login**
<img width="1366" height="768" alt="Screenshot (905)" src="https://github.com/user-attachments/assets/2dedad6e-bdb3-4154-87e2-8de68a850772" />

* **Report Form**
<img width="1366" height="768" alt="Screenshot (906)" src="https://github.com/user-attachments/assets/d62bded8-281c-446d-8cd5-0236c365c40e" />
  

* **Map Location Selection**
<img width="1366" height="768" alt="Screenshot (908)" src="https://github.com/user-attachments/assets/4c56f327-ab9f-4e22-a4e4-9e9c17749ffe" />

* **Dashboard**
<img width="1366" height="768" alt="Screenshot (909)" src="https://github.com/user-attachments/assets/1ac68d9e-c0c2-4e7f-ad90-1a6e7f33cae3" />

---

## **🗺 Supported Regions**

* Greater Accra
* Ashanti
* Western
* Western North
* Central
* Eastern
* Volta
* Oti
* Northern
* Savannah
* North East
* Upper East
* Upper West
* Bono
* Bono East
* Ahafo

---

## **📦 Example Report Object**

```json
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
```

---

## **✅ Future Enhancements**

* 🔐 Secure Authentication (JWT)
* 🖼 Photo Preview before upload
* 📊 Dashboard with filters (region, category)
* 📱 Mobile Responsive Design

---

## **📜 License**

This project is open-source under the **MIT License**.

---
