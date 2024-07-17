const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let tasks = [];

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.json(task);
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;
  tasks = tasks.map(task => task.id === parseInt(id) ? updatedTask : task);
  res.json(updatedTask);
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== parseInt(id));
  res.json({ message: 'Task deleted' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
