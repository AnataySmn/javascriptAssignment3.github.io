const newTodoInput = document.querySelector('#new-todo');
const addTodoButton = document.querySelector('#add-todo');
const todoList = document.querySelector('#todo-list');
const dingSound = new Audio('ding.mp3');

addTodoButton.addEventListener('click', () => {
  const newTodoText = newTodoInput.value.trim();
  if (newTodoText !== '') {
    const newTodo = createTodoElement(newTodoText);
    todoList.appendChild(newTodo);
    newTodoInput.value = '';
  }
});

function createTodoElement(text) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
    if (checkbox.checked) {
      todoList.appendChild(li);
      dingSound.play();
      label.classList.add("checked");
      label.classList.add("green");
    } else {
      todoList.insertBefore(li, todoList.firstChild);
    }
  });
  const label = document.createElement('label');
  label.textContent = text;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    li.classList.add("deleted");
    setTimeout(() => {
      li.remove();
    }, 1000);
  });
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteButton);
  return li;
}



