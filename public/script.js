const todoList = document.getElementById('todoList');
const addTodoForm = document.getElementById('addTodoForm');

// Function to fetch and display todos
async function fetchTodos() {
    const response = await fetch('http://localhost:3000/todos');
    const todos = await response.json();

    todoList.innerHTML = '';
    todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.classList.add('todoItem');
        listItem.innerHTML = `
          <input type="checkbox" ${todo.Completed ? 'checked' : ''} />
          <span>${todo.Task}</span>`;
        todoList.appendChild(listItem);
    });
};


// Function to add a new todo
addTodoForm.addEventListener('submit',async(event)=>{
    event.preventDefault();

    const taskInput = document.getElementById('task');
    const task = taskInput.value;

    console.log('Task:', task);

    if (task.trim() === '') {
        alert('Task cannot be empty!');
        return;
    }

    await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Task:task,
            Completed: false,
        }),
    });

    // Clear the input and fetch updated todos
    taskInput.value = '';
    fetchTodos();
});

// Initial fetch of todos
fetchTodos();