document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskContent.addEventListener('click', toggleTaskCompleted);
        taskItem.appendChild(taskContent);

        const editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', () => editTask(taskContent));
        taskItem.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => taskItem.remove());
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
        taskInput.value = '';
        taskInput.focus();
    }

    function toggleTaskCompleted(event) {
        event.target.classList.toggle('completed');
    }

    function editTask(taskContent) {
        const newTaskText = prompt('Edit Task:', taskContent.textContent);
        if (newTaskText !== null) {
            taskContent.textContent = newTaskText;
        }
    }
});

function showSection(sectionId) {
    document.getElementById('todo-list-section').style.display = 'none';
    document.getElementById('how-it-works').style.display = 'none';
    document.getElementById('features').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}
