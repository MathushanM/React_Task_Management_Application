
## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- React.js and npm (Node Package Manager) should be installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone :Link of the repository 
   ```
2. ## Steps to create Database
   QUERIES:
   -- Create the database
CREATE DATABASE IF NOT EXISTS task_management;

-- Use the database
USE task_management;

-- Create the tasks table
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

   

3. ## Steps to run server

   1. Open the project in any editor of choice.
   2. Navigate into the server directory `cd server`.
   3. Run  `npm install` to install the packages.
   4. Run `npm start` to start the server.
   If configured correctly, you should see a message indicating that the Server is running on port 3001.

4. ## Steps to run client

   1. Navigate into the client directory `cd client`.
   2. Run `npm install` to install the packages.
   3. Run `npm start` to run the app on `http://localhost:3000`.
   4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



## **Technologies Used:**
- **Frontend:**
    - React 


- **Backend:**
    - Node.js with Express.js
    
- **Database:**
    - MySQL
