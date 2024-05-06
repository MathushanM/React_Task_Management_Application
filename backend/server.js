const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); 

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'task_management'
});

app.get('/', (req, res) => {
    return res.json("from backend");
});

app.get('/tasks', (req,res)=>{
    const sql = "SELECT * FROM tasks";
    db.query(sql,(err,data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})


// Endpoint to add a new task
app.post('/addTasks', (req, res) => {
    const { title, description } = req.body;

    // Check if title and description are provided
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    // Construct the SQL query to insert the task into the database
    const sql = "INSERT INTO tasks (title, description) VALUES (?, ?)";

    // Execute the query with the provided title and description
    db.query(sql, [title, description], (err, result) => {
        if (err) {
            console.error('Error adding task:', err);
            return res.status(500).json({ error: 'Failed to add task' });
        }
        console.log('Task added successfully');
        return res.status(201).json({ message: 'Task added successfully' });
    });
});

// Endpoint to delete a task by its ID
app.delete('/deleteTask/:id', (req, res) => {
    const taskId = req.params.id;

    // Construct the SQL query to delete the task from the database
    const sql = "DELETE FROM tasks WHERE id = ?";

    // Execute the query with the provided task ID
    db.query(sql, taskId, (err, result) => {
        if (err) {
            console.error('Error deleting task:', err);
            return res.status(500).json({ error: 'Failed to delete task' });
        }
        console.log('Task deleted successfully');
        return res.status(200).json({ message: 'Task deleted successfully' });
    });
});


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
