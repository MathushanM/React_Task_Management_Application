const express = require('express');
const connection = require('../server'); 
const Task = require('../models/Task');

const app = express();

// Define the getTasks function
function getTasks(callback) {
  connection.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
      console.error('Error fetching tasks:', err);
      callback(err, null);
      return;
    }
    callback(null, results);
  });
}

// Root the /tasks endpoint to /api/tasks
app.get('/api/tasks', (req, res) => {
  getTasks((err, tasks) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
      return;
    }
    res.json(tasks);
  });
});


 


// Define the createTask function
function createTask(taskData, callback) {
    
    connection.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [taskData.title, taskData.description], (err, result) => {
      if (err) {
        console.error('Error creating task:', err);
        callback(err, null);
        return;
      }
      callback(null, result.insertId); // Return the ID of the inserted task
    });
  }
  
  // Root the /tasks endpoint to handle task creation
  app.post('/api/tasks', (req, res) => {
    const taskData = req.body; // Assuming the request body contains the task data
    createTask(taskData, (err, taskId) => {
      if (err) {
        res.status(500).json({ error: 'Failed to create task' });
        return;
      }
      res.status(201).json({ message: 'Task created successfully', taskId });
    });
  });

  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
  

