window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input")
    const list_el = document.querySelector("#tasks")

    console.log(input)

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = input.value;

        if(!task){
            alert("add item");
            return;
        }
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerText = task;


        const task_button_features_el = document.createElement("div");
        task_button_features_el.classList.add("buttonfeatures");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_button_features_el.appendChild(task_edit_el);
        task_button_features_el.appendChild(task_delete_el);
        

        task_el.appendChild(task_content_el);
        task_el.appendChild(task_button_features_el);

        list_el.appendChild(task_el);


        task_delete_el.addEventListener('click', () =>{
            task_el.remove();
        })
    })
})