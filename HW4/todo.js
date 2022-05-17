const enter = document.querySelector('.enter');
const completeAllBtn = document.querySelector('.complete-all-btn');
const todoinput = document.querySelector('.todo-input');
const todolist = document.querySelector('.todo-list');
const delBtn = document.querySelector('.delBtn');

let todos = [];

const DUMMY_ITEM = [
  { id: 1, content: '할일 1', isCompleted: true },
  { id: 2, content: '할일 2', isCompleted: false },
];

// for test
todos.push(...DUMMY_ITEM);
const updateCount = () => {
  const leftItems = document.querySelector('.left-items');
  leftItems.innerHTML = `오늘 할 일이 ${
    todos.filter((ele) => !ele.isCompleted).length
  }개 남았습니다`;
};

const removeAllChild = (element) => {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

const paintTodos = () => {
  removeAllChild(todolist);
  todos.forEach((element) => paint(element));
  updateCount();
};

const updateTable = (e, todoId) => {
  const editInput = e.target.parentNode.querySelector('.edit-input');
  editInput.classList.add('visible');
  editInput.focus();
  editInput.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') actionWithPaint(() => updateItem(todoId, editInput));
  });
};

const actionWithPaint = (action) => {
  action();
  paintTodos();
};

const updateItem = (todoId, editInput) => {
  todos = todos.map((element) =>
    element.id == todoId ? { ...element, content: editInput.value } : element
  );
};

const checkItem = (todoId) => {
  todos = todos.map((element) =>
    element.id == todoId
      ? { ...element, isCompleted: !element.isCompleted }
      : element
  );
};

const deleteItem = (todoId) => {
  todos = todos.filter((element) => element.id != todoId);
};

const paint = (element) => {
  const liElement = document.createElement('li');
  liElement.classList.add('todo-item');

  const checkBtn = document.createElement('button');
  checkBtn.classList.add('checkbox');
  checkBtn.addEventListener('click', () => {
    actionWithPaint(() => checkItem(element.id));
  });

  const divElement = document.createElement('div');
  divElement.classList.add('content');
  divElement.innerHTML = element.content;
  divElement.addEventListener('dblclick', (e) => {
    updateTable(e, element.id);
  });

  const inputElement = document.createElement('input');
  inputElement.classList.add('edit-input');
  inputElement.addEventListener('focusout', () => {
    inputElement.classList.remove('visible');
  });

  const delBtn = document.createElement('button');
  delBtn.classList.add('delBtn');
  delBtn.addEventListener('click', () => {
    actionWithPaint(() => deleteItem(element.id));
  });

  if (element.isCompleted) liElement.classList.add('checked');

  liElement.append(checkBtn);
  liElement.append(divElement);
  liElement.append(inputElement);
  liElement.append(delBtn);

  todolist.append(liElement);
};

const enterEvent = () => {
  if (todoinput.value.length > 0) {
    todos = [
      ...todos,
      { id: todos.length, content: todoinput.value, isCompleted: false },
    ];
  }
  todoinput.value = '';
};

completeAllBtn.addEventListener('click', () => {
  let cnt = 0;
  for (e of todos) if (e.isCompleted) cnt++;
  actionWithPaint(() => {
    todos = todos.map((element) => {
      return {
        ...element,
        isCompleted: cnt == todos.length ? !element.isCompleted : true,
      };
    });
  });
});

enter.addEventListener('click', () => {
  actionWithPaint(enterEvent);
});

todoinput.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') actionWithPaint(enterEvent);
});

paintTodos();
