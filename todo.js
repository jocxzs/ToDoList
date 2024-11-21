document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addButton').addEventListener('click', function() {
        const input = document.getElementById('taskInput');
        const taskName = input.value.trim();

        if (taskName) {
            const taskList = document.getElementById('taskList');
            const newTask = document.createElement('li');

            newTask.innerHTML = `
                <span>${taskName}</span>
            `;

            taskList.appendChild(newTask);
            input.value = '';
        } else {
            alert('Por favor, insira uma tarefa!');
        }
    });
});
