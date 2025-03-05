const button = document.getElementById('btn');
const container = document.getElementById('taskContainer');

button.addEventListener("click", () => {
    const div = document.createElement('div');
    div.classList.add('create');

    const input = document.createElement('input');
    input.placeholder = "Enter task name";
    input.value = "";  // Fixed typo

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    // When 'Save' is clicked, move to the "newtask" div
    saveButton.addEventListener("click", () => {
        if (input.value.trim() === "") {
            alert("Task name cannot be empty!");
            return;
        }

        const tasks = document.createElement('div');
        tasks.classList.add('newtask');

        const name = document.createElement('h3');  // Fixed createElement
        name.textContent = input.value;

        const deleteEl = document.createElement('button');
        deleteEl.textContent = `delete`;
        deleteEl.addEventListener('click', () => {
            name.remove();
            deleteEl.remove();
        })

        tasks.appendChild(name);
        tasks.appendChild(deleteEl);
        container.appendChild(tasks);

        div.remove();
    });

        div.remove();

    div.appendChild(input);
    div.appendChild(saveButton);

    // Append to container
    container.appendChild(div);
});
