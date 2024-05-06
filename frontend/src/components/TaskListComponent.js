import React, { useState, useEffect } from 'react';
import { createTask, getTasks, deleteTask } from '../services/taskService'; // Import the deleteTask function
import '../assets/css/taskForm.css';


function TaskListComponent() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [checkedTasks, setCheckedTasks] = useState(() => {
    const storedTasks = localStorage.getItem('checkedTasks');
    return storedTasks ? JSON.parse(storedTasks) : {};
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    localStorage.setItem('checkedTasks', JSON.stringify(checkedTasks));
  }, [checkedTasks]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a POST request to the backend to create a new task
      await createTask({ title, description });

      // Clear the form fields after successful submission
      setTitle('');
      setDescription('');

      // Refresh tasks after adding a new task
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the backend to delete the task
      await deleteTask(id);

      // Refresh tasks after deleting the task
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleCheckboxChange = (id) => {
    setCheckedTasks(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
      
      <h2>Tasks List</h2>
      {tasks && tasks.length > 0 ? (
        <ul>
          {tasks.map(task => (
            <li key={task.id} className = "task-item">
              <input 
                type="checkbox"
                checked={checkedTasks[task.id]}
                onChange={() => handleCheckboxChange(task.id)} 
              /> {/* Checkbox */}
              <span>{task.title} - {task.description}</span> {/* Task text */}
              <button className="delete-button" onClick={() => handleDelete(task.id)}>Delete</button> {/* Delete button */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
}

export default TaskListComponent;
