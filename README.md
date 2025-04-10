# 🎭 C-Experience Study — Character CRUD
This repository is a place to include college activities 


Fullstack project using React + Node.js + MySQL, developed as part of a study activity. It allows the creation, reading, updating, and deletion of characters from different fictional universes.

---

## 🚀 Technologies Used

- **Frontend**: React + React Bootstrap  
- **Backend**: Node.js + Express + MySQL  
- **Database**: MySQL

---

## ⚙️ Prerequisites

Before starting, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MySQL Server](https://dev.mysql.com/downloads/mysql/)
- [Git](https://git-scm.com/)

---

## 🛠️ Installation & Running the Project

### 1. Clone the repository

```bash
git clone https://github.com/nabelly19/C-Experience-Study.git
```

### 2. Set up the Database
#### 1. Create a new database in MySQL (e.g., personagens_db)

#### 2.Import the .sql file (Self-Contained File)

Using MySQL terminal or a GUI tool like DBeaver or MySQL Workbench

#### 3.Update the database connection credentials in the backend:
File: backend/db.js


const pool = mysql.createPool({
  host: "localhost",
  user: "your_user",
  password: "your_password",
  database: "personagens_db",
});

### 3. Install Dependencies

### 4. Run the Application

