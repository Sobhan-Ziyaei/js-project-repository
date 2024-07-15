
let inputElem = document.querySelector('input');
let addBtn = document.querySelector('#addButton');
let clearAllBtn = document.querySelector('#clearButton');
let ulElem = document.querySelector('#todoList');

let todosList = [];

addTodo = () => {
    let inputValue = inputElem.value;

    let newTodoObj = {
        id: todosList.length + 1,
        title: inputValue,
        status: false,
    }

    inputElem.value = '';

    todosList.push(newTodoObj);
    setLocalStorage(todosList);
    todosGenerator(todosList);

    inputElem.focus();
};

setLocalStorage = (todosList) => {
    localStorage.setItem('todos', JSON.stringify(todosList));
}

todosGenerator = (todosList) => {

    let newTodoLiElem, newTodoLabelElem, newTodoCompleteBtn, newTodoDeleteBtn;

    ulElem.innerHTML = '';

    todosList.forEach(todo => {
        newTodoLiElem = document.createElement('li');
        newTodoLiElem.className = 'completed well';

        newTodoLabelElem = document.createElement('label');
        newTodoLabelElem.innerHTML = todo.title;

        newTodoCompleteBtn = document.createElement('button');
        newTodoCompleteBtn.className = 'btn btn-success';
        newTodoCompleteBtn.innerHTML = 'Complete';

        newTodoDeleteBtn = document.createElement('button');
        newTodoDeleteBtn.className = 'btn btn-danger';
        newTodoDeleteBtn.innerHTML = 'Delete';
        newTodoDeleteBtn.addEventListener('click', () => deleteTodo(todo.id));

        newTodoLiElem.append(newTodoLabelElem, newTodoCompleteBtn, newTodoDeleteBtn);

        ulElem.append(newTodoLiElem);

    });
};

deleteTodo = (todoId) => {
    let todoIndex = todosList.findIndex(todo => todo.id === todoId);
    todosList.splice(todoIndex, 1);
    setLocalStorage(todosList);
    todosGenerator(todosList);
}

getTodoList = () => {
    let todos = localStorage.getItem('todos');
    if (todos) {
        todosList = JSON.parse(todos);
    } else {
        todosList = [];
    }
    todosGenerator(todosList);
}

clearAllTodos = () => {
    todosList = [];
    todosGenerator(todosList);
    localStorage.removeItem('todos');
}

window.addEventListener('load', getTodoList);
addBtn.addEventListener('click', addTodo);
clearAllBtn.addEventListener('click', clearAllTodos);
inputElem.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        addTodo();
    }
})