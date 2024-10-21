document.getElementById('add-task').addEventListener('click', function() {
    let taskText = document.getElementById('new-task').value;

    if (taskText.trim() === '') {
        alert('Por favor, adicione uma tarefa.');
        return;
    }

    // Criar um novo elemento de lista
    let li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="delete">Remover</button>`;

    // Adicionar evento para marcar como concluído
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Adicionar evento para remover tarefa
    li.querySelector('.delete').addEventListener('click', function(e) {
        e.stopPropagation();
        li.remove();
    });

    // Adicionar a tarefa à lista
    document.getElementById('task-list').appendChild(li);

    // Limpar campo de entrada
    document.getElementById('new-task').value = '';
});
