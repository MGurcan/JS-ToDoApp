words_geridonus = [
    "Her şeye rağmen pişman olmamak en güzeli…",
    "Gökyüzü çatlasa bile,\nBir geri dönüş yolu olmalı.\nSevmek ve yalnızca sevmek için.",
    "Yapılan seçimler beraberinde suçluluk getiriyor. Bundan kurtuluş yok.",
    "Belirli bir noktadan sonra geri dönüş yoktur. İşte bu noktaya ulaşmak gerekir.",
    "Geri dönüş. Sürgünde hayal etmeye değecek çok az şey vardı."
]
let deleted_elements = [];

window.addEventListener('load', () => { //The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input")
    const list_el = document.querySelector("#tasks")


    form.addEventListener("submit", (e) => {    
        e.preventDefault();   //to stop button's default feature ( directs to page again )
        const task = input.value;

        if(!task){
            alert("Please add item");
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
        var readd_button = document.getElementById('readdbutton');
        

        task_delete_el.addEventListener('click', () =>{
            var confirm_message = words_geridonus[Math.floor(Math.random() * 5)] + "\nYOU ARE GOING TO DELETE THIS \"TO DO\". YOU SURE?"
            if(confirm(confirm_message)){
                deleted_elements.push(task_el);
                task_el.remove();
            }
        })
            




       
        readd_button.addEventListener('click', () =>{
            console.log("calısti")
            var temp = deleted_elements.pop();
            if(temp != null){
                list_el.appendChild(temp);     
            }
        }); 
    })
})