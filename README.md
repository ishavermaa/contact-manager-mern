

# 📱 MERN Contact Manager

A full-stack Contact Management Web App built using the MERN stack (MongoDB, Express, React, Node.js).

## 🚀 Features

- 📞 Dial Pad to enter phone numbers
- ➕ Add new contacts
- 🔍 Search contacts by name or number
- 🗑️ Delete contacts
- 🔄 Real-time updates
- 📱 Clean and responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- CSS (inline styling)

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose

---

## 📁 Project Structure
contact-manager-mern/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── server.js
│
├── frontend/
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── App.js



---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/contact-manager-mern.git
cd contact-manager-mern

2️⃣ Backend Setup
cd backend
npm install

Create .env file:
MONGO_URI=your_mongodb_connection_string

Run backend:
node server.js

3️⃣ Frontend Setup
cd frontend
npm install
npm start
