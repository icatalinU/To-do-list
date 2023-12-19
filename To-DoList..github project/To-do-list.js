let todoList = [];
const addTask = document.getElementById("addTask");
addTask.addEventListener("click", addTodoItem);

function addTodoItem() {
    let itemInput = document.getElementById("TodoInput");  
    let item = itemInput.value.trim();

    if (item === "") {
        alert("Please enter a task.");
        return;
    }

    todoList.push(item);

    let list = document.querySelector(".todoList");  
    let listItem = document.createElement("div");
    listItem.className = "todoItem";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
        if (checkbox.checked) {
            itemText.style.textDecoration = "line-through";
            listItem.classList.add("checked");
        } else {
            itemText.style.textDecoration = "none";
            listItem.classList.remove("checked");
        }
    };

    listItem.appendChild(checkbox);

    let itemText = document.createElement("span");
    itemText.textContent = item;
    listItem.appendChild(itemText);

    let buttonsDiv = document.createElement("div");
    listItem.appendChild(buttonsDiv);

    let editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.onclick = function () {
        itemText.contentEditable = true;
        itemText.focus();
    };

    buttonsDiv.appendChild(editButton);

    itemText.onblur = function () {
        itemText.contentEditable = false;
        todoList[todoList.indexOf(item)] = itemText.textContent;
    };

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.onclick = function () {
        list.removeChild(listItem);
        todoList.splice(todoList.indexOf(item), 1);
    };

    buttonsDiv.appendChild(deleteButton);

    list.appendChild(listItem);
    itemInput.value = "";
}
