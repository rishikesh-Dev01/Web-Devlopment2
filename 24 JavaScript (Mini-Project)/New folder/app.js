const todo = document.querySelector('#todo')
const progress = document.querySelector('#Progress')
const done  = document.querySelector('#Done')
let dragElement = null;

const tasks = document.querySelectorAll('.task');

tasks.forEach(task => {
    task.addEventListener("dragstart", () => {
        dragElement = task;
    });
});


function addDragEventsOnColumn(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    });

    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    });

    column.addEventListener("dragover", (e) => {
        e.preventDefault(); // IMPORTANT for drop to work
    });

    column.addEventListener("drop", (e) => {
        e.preventDefault();

        console.log("dropped", dragElement, column);

        column.appendChild(dragElement);
        column.classList.remove("hover-over");
    })
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// modal related logic 
const toggleModalButton = document.querySelector("#toggle-modal")
const modalBg =  document.querySelector(".modal .bg")
const modal = document.querySelector(".modal")


toggleModalButton.addEventListener("click", () => {
    modal.classList.toggle("active")
})

modalBg.addEventListener("click", () => {
    modal.classList.remove("active")
})