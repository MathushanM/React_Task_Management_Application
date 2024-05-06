const pool = require('../server');

class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  static create(taskData, callback) {
    const { title, description } = taskData;
    pool.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description], (err, result) => {
      if (err) {
        console.error('Error creating task:', err);
        callback(err, null);
        return;
      }
      callback(null, result.insertId);
    });
  }

  static getAll(callback) {
    pool.query('SELECT * FROM tasks', (err, results) => {
      if (err) {
        console.error('Error fetching tasks:', err);
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  }
}

module.exports = Task;
