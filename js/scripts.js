//seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

//Funções

const saveTodo = (text) => {

    const todo = document.createElement("div"); //cria uma div
    todo.classList.add("todo"); //adiciona uma class na div

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle); //adiciona como tag filho da div(todo)

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();

};

//Eventos
todoForm.addEventListener("submit", e => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue) {
        saveTodo(inputValue);
    }
});

document.addEventListener("click", e => {
    const targetEl = e.target; //para saber qual elemento foi clicado
    const parentEl = targetEl.closest("div"); //seleciona o elemento "div" mais próximo
 
    if(targetEl.classList.contains("finish-todo")) { //verifica se o elemento clicado tem a clase "finish-todo"
        parentEl.classList.toggle("done");//adiciona a class "done" na div pai
        //.toggle verifica se a class já existe, se já ele tira, se não ele coloca
    };

    if(targetEl.classList.contains("remove-todo")) {
        parentEl.remove(); //remove a div
    }

});