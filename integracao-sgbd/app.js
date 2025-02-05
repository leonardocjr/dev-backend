const express = require('express');
const { sequelize, Task } = require('./models');

const app = express();
app.use(express.json());

app.post('/tasks', async (req, res) => {
  const { name, description } = req.body;
  try {
    const task = await Task.create({ name, description });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar a tarefa.' });
  }
});

app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    await task.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao excluir a tarefa.' });
  }
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao listar as tarefas.' });
  }
});

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
