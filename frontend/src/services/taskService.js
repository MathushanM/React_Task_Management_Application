const baseUrl = 'http://localhost:3001/tasks'; 
const addUrl = 'http://localhost:3001/addTasks';
const deleteUrl = "http://localhost:3001/deleteTask"
 



export const getTasks = async () => {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch tasks: ' + error.message);
  }
};


export const createTask = async (task) => {
  try {
    const response = await fetch(addUrl, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task), 
    });
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
    return response.json();
  } catch (error) {
    throw new Error('Failed to create task: ' + error.message);
  }
};



export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${deleteUrl}/${taskId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
    return response.json();
  } catch (error) {
    throw new Error('Failed to delete task: ' + error.message);
  }
};
