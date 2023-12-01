var _a;
// Initial data
var tasks = [
    { id: 1, name: 'Buy Grocery', status: 'ToDo' },
    { id: 2, name: 'Send Email', status: 'ToDo' },
    { id: 3, name: 'Bake Cake', status: 'ToDo' },
    { id: 4, name: 'Finish Assignment', status: 'ToDo' },
    { id: 5, name: 'Go To Gym', status: 'ToDo' },
];
// Function to add a new task to the table
function addTask() {
    var inputElement = document.querySelector('.myInput');
    var taskName = inputElement.value.trim();
    if (taskName !== "") {
        var newTask = { id: Date.now(), name: taskName, status: 'ToDo' };
        tasks.push(newTask);
        renderTable();
        inputElement.value = '';
    }
}
// Function to render the table with dynamic data
function renderTable() {
    var tbodyElement = document.querySelector('tbody');
    // Check if tbodyElement is null before proceeding
    if (tbodyElement === null) {
        return;
    }
    tbodyElement.innerHTML = '';
    tasks.forEach(function (task, index) {
        var row = document.createElement('tr');
        row.innerHTML = "\n      <td>".concat(index + 1, "</td>\n      <td>").concat(task.name, "</td>\n      <td class=\"task-status ").concat(task.status.toLocaleLowerCase(), "\">").concat(task.status, "</td>\n      <td><img src=\"editIcon.jpeg\" width=\"40\" height=\"38\" alt=\"Edit\" onclick=\"editTask(").concat(task.id, ")\"></td>\n      <td><img src=\"deleteIcon.jpeg\" width=\"40\" height=\"38\" alt=\"Edit\" onclick=\"deleteTask(").concat(task.id, ")\"></td>\n    ");
        row.addEventListener('click', function () {
            if (task.status === 'ToDo') {
                task.status = 'Complete';
            }
            else {
                task.status = 'ToDo';
            }
            ;
            renderTable();
        });
        tbodyElement.appendChild(row);
    });
}
// Function to edit a task
function editTask(id) {
    var taskToEdit = tasks.find(function (task) { return task.id === id; });
    if (taskToEdit) {
        var newName = prompt('Edit task name:', taskToEdit.name);
        if (newName !== null) {
            taskToEdit.name = newName;
            renderTable();
        }
    }
}
// Function to delete a task
function deleteTask(id) {
    var index = tasks.findIndex(function (task) { return task.id === id; });
    if (index !== -1) {
        tasks.splice(index, 1);
        renderTable();
    }
}
// Event listener for the "Add Task" button
(_a = document.getElementById('addTaskBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addTask);
// Initial rendering of the table
renderTable();
