interface Task {
  id: number;
  name: string;
  status: String;
}
// Initial data
const tasks: Task[] = [
  { id: 1, name: 'Buy Grocery', status: 'ToDo' },
  { id: 2, name: 'Send Email', status: 'ToDo' },
  { id: 3, name: 'Bake Cake', status: 'ToDo' },
  { id: 4, name: 'Finish Assignment', status: 'ToDo' },
  { id: 5, name: 'Go To Gym', status: 'ToDo' },
];


// Function to add a new task to the table

function addTask(){
     const inputElement = document.querySelector('.myInput') as HTMLInputElement;
     const taskName = inputElement.value.trim();

     if (taskName !==""){
      const newTask: Task={id:Date.now() ,name:taskName, status:'ToDo'};
      tasks.push(newTask);
      renderTable();
      inputElement.value='';
     }
}

// Function to render the table with dynamic data
function renderTable() {
  const tbodyElement = document.querySelector('tbody');

  // Check if tbodyElement is null before proceeding
  if (tbodyElement === null) {
    return;
  }
  tbodyElement.innerHTML = ''; 

  tasks.forEach((task, index) => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${task.name}</td>
      <td class="task-status ${task.status.toLocaleLowerCase()}">${task.status}</td>
      <td><img src="editIcon.jpeg" width="40" height="38" alt="Edit" onclick="editTask(${task.id})"></td>
      <td><img src="deleteIcon.jpeg" width="40" height="38" alt="Edit" onclick="deleteTask(${task.id})"></td>
    `;

    row.addEventListener('click',()=>{
      if (task.status==='ToDo'){
        
        task.status='Complete';
      }
      else{task.status='ToDo'};

      renderTable();
    });
    tbodyElement.appendChild(row);
  });
  
}
// Function to edit a task
function editTask(id: number) {
  const taskToEdit = tasks.find(task => task.id === id);
  if (taskToEdit) {
    const newName = prompt('Edit task name:', taskToEdit.name);
    if (newName !== null) {
      taskToEdit.name = newName;
      renderTable();
    }
  }
}

// Function to delete a task
function deleteTask(id: number) {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    renderTable();
  }
}

// Event listener for the "Add Task" button
document.getElementById('addTaskBtn')?.addEventListener('click', addTask);


// Initial rendering of the table
renderTable();

