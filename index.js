window.addEventListener('load', () => {
    const form= document.querySelector("#task-form");//doms # for id . for class
    const input= document.querySelector("#task-input");
    const list_el =document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {//on submit
        e.preventDefault();//prevents the page from refreshing
        const task=input.value;
        if(!task){
            alert("Please fill out task");//prompts user to fill out task
            return;
        }
        else{
            console.log("Success")//indicates there was content
        }

        const task_el=document.createElement("div");
        task_el.classList.add("task");
        //creates a div of class task

        const task_content_el=document.createElement("div");
        task_content_el.classList.add("content");
        //div of class content
        //task_content_el.innerText=task;
        //inner text> text content >innerhtml(basically a joke imo)

        task_el.appendChild(task_content_el);
        list_el.appendChild(task_el);
    })
})