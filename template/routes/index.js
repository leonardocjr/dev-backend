var express = require('express');
var Task = require("../model/Tasks");
var TaskSchema = require("../validators/TaskValidator");
const Joi = require("joi");
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { tasks: Task.list() });
});

router.get('/tarefas/lista', function (req, res) {
    res.render('list', { tasks: Task.list() });
});

router.get('/tarefas/count', function (req, res) {
    res.render('count', { count: Task.count() });
});

router.post("/tarefas", function (req, res) {
    const { error, value } = TaskSchema.validate(req.body);
    if (error) {
        res.render('index', { tasks: Task.list(), erro: "Dados incompletos ou inválidos" });
        return;
    }
    const { id, nome, priority } = value;
    if (id === undefined) {
        Task.new(nome, priority);
    } else {
        Task.update(id, nome, priority);
    }
    res.redirect("/");
});

router.get("/tarefas/delete/:id", function(req, res) {
    const id = parseInt(req.params.id);
    Task.delete(id);
    res.redirect("/");
  });
  

module.exports = router;
