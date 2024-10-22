document.getElementById('add-task').addEventListener('click', function () {

    let taskText = document.getElementById('new-task').value;

    if (taskText.trim() === '') {
        alert('Por favor, adicione uma tarefa.');
        return;
    }

    let li = document.createElement('li');

    li.innerHTML = `${taskText} <button class="delete">Remover</button>`;
    
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    li.querySelector('.delete').addEventListener('click', function (e) {
        e.stopPropagation();
        li.remove();
    });

    document.getElementById('task-list').appendChild(li);

    document.getElementById('new-task').value = '';
});
