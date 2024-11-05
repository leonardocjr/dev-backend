let ids = 0;
let tasks = [];

module.exports = {
    new(name, priority = "Baixa") {
        let task = { id: ++ids, name, priority, completed: false };
        tasks.push(task);
        return task;
    },
    update(id, name, priority) {
        let pos = this.getPositionById(id);
        if (pos >= 0) {
            tasks[pos].name = name;
            tasks[pos].priority = priority;
        }
    },
    list() {
        return tasks.sort((a, b) => a.name.localeCompare(b.name));
    },
    getElementById(id) {
        let pos = this.getPositionById(id);
        return pos >= 0 ? tasks[pos] : null;
    },
    getPositionById(id) {
        return tasks.findIndex(task => task.id == id);
    },
    delete(id) {
        let i = this.getPositionById(id);
        if (i >= 0) {
            tasks.splice(i, 1);
            return true;
        }
        return false;
    },
    count() {
        return tasks.length;
    }
}
