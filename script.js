function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();
    if (taskText === "") return;

    var li = document.createElement("li");
    li.textContent = taskText;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.backgroundColor = "transparent";
    deleteBtn.style.color = "red";
    deleteBtn.onclick = function() { li.remove(); };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
