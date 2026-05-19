// ================= ELEMENTS =================

const taskInput =
document.getElementById("taskInput");

const addTaskBtn =
document.getElementById("addTaskBtn");

const taskList =
document.getElementById("taskList");


// ================= ADD TASK =================

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        addTask();

    }

});


// ================= FUNCTION =================

function addTask(){

    const taskText =
    taskInput.value.trim();

    // EMPTY CHECK

    if(taskText === ""){

        alert("Please enter a task");

        return;

    }

    // CREATE TASK

    const li =
    document.createElement("li");

    li.classList.add("task");

    // TASK CONTENT

    li.innerHTML =

    `
    <span class="task-text">

        ${taskText}

    </span>

    <div class="task-buttons">

        <button class="complete-btn">

            Complete

        </button>

        <button class="delete-btn">

            Delete

        </button>

    </div>
    `;

    // COMPLETE BUTTON

    const completeBtn =
    li.querySelector(".complete-btn");

    completeBtn.addEventListener("click", () => {

        li.querySelector(".task-text")
          .classList.toggle("completed");

    });

    // DELETE BUTTON

    const deleteBtn =
    li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {

        li.remove();

    });

    // ADD TASK TO LIST

    taskList.appendChild(li);

    // CLEAR INPUT

    taskInput.value = "";

}