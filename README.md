# 📝 TodoApp

A full-stack **Todo Application** built with **React, Node.js, Express, and MongoDB**.  
Users can register, log in, and manage their personal tasks with features like add, edit, delete, and mark as complete/incomplete.

---

## ✨ Features
- 🔑 User registration & login (**JWT authentication**)
- 📝 Add, edit, delete, and search tasks
- ✅ Mark tasks as complete/incomplete
- 🔍 Filter tasks by status
- 🎨 Responsive UI with **Ant Design**
- 🔒 Protected routes (only logged-in users can access)

---

## 🛠 Tech Stack
- **Frontend:** React, Ant Design, Axios  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JWT  

---
## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/phu-nguyen-dinh/TodoApp.git
cd TodoApp
```
### 2️⃣ Install dependencies
Backend
```bash
npm install
```
Frontend
```bash
cd client
npm install
```
### 3️⃣ Environment Variables
Create a .env file in the root directory:
```bash
PORT=5000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
### 4️⃣ Run the App
Backend
```bash
npm start
```
Frontend
```bash
cd client
npm start
```
---
### 📡 API Endpoints
| Method | Endpoint            | Description                 |
|--------|---------------------|-----------------------------|
| POST   | `/api/register`     | Register a new user         |
| POST   | `/api/login`        | Login and receive JWT token |
| GET    | `/api/todo/:userId` | Get all todos for a user    |
| POST   | `/api/todo/`        | Create a new todo           |
| PUT    | `/api/todo/:id`     | Update a todo               |
| DELETE | `/api/todo/:id`     | Delete a todo               |

---
### 📂 Folder Structure
```bash
TodoApp/
│
├── client/                # React frontend
│   └── src/
│       ├── pages/
│       ├── components/
│       └── services/
│
├── controllers/           # Express controllers
├── middleware/            # JWT middleware
├── models/                # Mongoose models
├── routes/                # Express routes
├── server.js              # Express server entry point
└── .env                   # Environment variables
```

---
### 📜 License
### MIT

---
### 👨‍💻 Author
Phu
