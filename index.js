let taskArr = [];
const taskDiv = document.getElementById("tasks");
const task = document.getElementById("input");
const taskLeft = document.getElementById("task_left");

function addTask(event) {
  if (event.key === "Enter") {
    const name = task.value;
    console.log(name);
    taskArr.push({ name: name, completed: false }); // Initially, the task is not completed
    if (name.trim() !== "") {
        list();
        task.value = "";
    }
  }
}
function addTaskOnClick() {
    const name = task.value;
    console.log(name);
    taskArr.push({ name: name, completed: false }); // Initially, the task is not completed
    if (name.trim() !== "") {
        list();
        task.value = "";
    }
}

function tasksLeft() {
  taskLeft.innerHTML = `${taskArr.length} tasks left`;
}


function list() {
    taskDiv.innerHTML = "";
    taskArr.forEach((taskName, i) => {
      const li = document.createElement("li");
  
      li.innerHTML = `
        <div class="list_Item">
          <label>${taskName.name}</label>
          <div class="end_Align">
            <input type="checkbox" onchange="checkItem(${i})" ${taskName.completed ? 'checked' : ''}>
            <button onclick="removeTask(${i})" key="${i}"><img class="x_mark" src="./xmark-solid.svg"  ></button>
          </div>
        </div>
      `;
  
      taskDiv.appendChild(li);
    });
  
    tasksLeft();
  }
function checkItem(i) {
    taskArr[i].completed = !taskArr[i].completed;
    list();
}


function removeTask(i) {
  taskArr = taskArr.filter((j, num) => num != i);
  console.log(taskArr);
  list();
}

function clearCompleted(){
    taskArr = taskArr.filter((j, num) => j.completed == false);
    list();
}

function completeAll(){
    taskArr.forEach((item)=> item.completed = true)
    list();
}