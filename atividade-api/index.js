const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];
let currentId = 1;

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.post("/tasks", (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: "Precisa criar um titulo e descricao" });
    }

    const newTask = { id: currentId++, title, description, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

    if (taskIndex === -1) {
        return res.status(404).json({ error: "Tarefa nao encontrada" });
    }

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        title: title ?? tasks[taskIndex].title,
        description: description ?? tasks[taskIndex].description,
        completed: completed ?? tasks[taskIndex].completed
    };

    res.json(tasks[taskIndex]);
});

app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;

    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

    if (taskIndex === -1) {
        return res.status(404).json({ error: "Tarefa nao encontrada" });
    }

    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask);
});

app.listen(3000, () => {
    console.log(`Servidor iniciado`);
});
