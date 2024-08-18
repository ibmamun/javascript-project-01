const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();


    addTask();

    taskInput.value = "";

});

const addTask = function () {
    const listItem = document.createElement('li');

    const completeCheckbox = document.createElement('input');
    completeCheckbox.type = 'checkbox';
    completeCheckbox.classList.add('form-check-input');

    completeCheckbox.addEventListener('change', () => {
        if (completeCheckbox.checked) {
            listItem.classList.add('complete')
        } else {
            listItem.classList.remove('complete')
        }
    });

    listItem.appendChild(completeCheckbox);


    const textDiv = document.createElement('div');
    textDiv.classList.add('taskContent');


    textDiv.textContent = taskInput.value;
    listItem.appendChild(textDiv);

    const actionDiv = document.createElement('div');
    actionDiv.classList.add('taskAction');

    listItem.appendChild(actionDiv)

    taskList.appendChild(listItem);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    actionDiv.appendChild(deleteBtn);

    actionDiv.classList.add();

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    editBtn.addEventListener('click', () => {
        const editTask = prompt('Edit Your Task:');
        listItem.childNodes[1].textContent = editTask;
    });

    actionDiv.appendChild(editBtn);
}