// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Task = require('./models/task');

// Express app
const app = express();

// Middleware
app.use(bodyParser.json());

//MongoDB connection
mongoose.connect('mongodb://localhost:27017/taskManager', { useNewUrlParser: true, useUnifiedTopology: true,family: 4, })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// API Endpoints

// Create a new task
app.post('/tasks', async (req, res) => {
    try {
        const { name } = req.body;
        const task = new Task({ name });
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Retrieve all tasks
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
  try {
      const taskId = req.params.id;
      const { name } = req.body;
      const updatedTask = await Task.findByIdAndUpdate(taskId, { name }, { new: true });
      if (!updatedTask) {
          return res.status(404).json({ message: 'Task not found' });
      }
      res.json(updatedTask);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
  try {
      const taskId = req.params.id;
      const deletedTask = await Task.findByIdAndDelete(taskId);
      if (!deletedTask) {
          return res.status(404).json({ message: 'Task not found' });
      }
      res.json({ message: 'Task deleted successfully' });
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
