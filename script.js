let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    // empty naaa ho us ky lye condition
   if (!taskInput.value.trim()) {
       return alert("you must be write somthing!")
     }
    if (task) {
        tasks = [...tasks, task]; // spread operator used kiya ha
        taskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)]; //  spread operator used kiya ha  remove task k liye
    renderTasks();
}
