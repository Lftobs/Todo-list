const todoinput = document.querySelector(".td-inp");
const todobtn = document.querySelector(".add-td");
const content = document.querySelector(".content")
//evl
todobtn.addEventListener('click', addtodo);

// fun
function addtodo(event){
    event.preventDefault();
    
    //div section
    const tddiv = document.createElement("div");
    tddiv.classList.add('list');
    
    const ui = document.createElement('ul');
    const tddivT = document.createElement("div");
    tddivT.classList.add('todo');
    tddivT.style.width="100%";
    const todoi = document.createElement('li');
    
    
    todoi.innerText = todoinput.value;
    saveLocalTodos(todoinput.value);
   
    todoi.classList.add('todo-item');
    tddiv.appendChild(ui);
    ui.appendChild(tddivT);
    
    tddivT.appendChild(todoi);
    //btn
    const tick = document.createElement('button');
    tick.classList.add('btn1');
    tick.innerHTML = '<i class="fa-solid fa-check"></i>';
    tddivT.appendChild(tick);
    
    
    const delbtn = document.createElement('button');
    delbtn.classList.add('btn2');
    delbtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    tddivT.appendChild(delbtn);
   // console.log("last");
    content.appendChild(tddiv);
    todoinput.value = "";
    
    tddiv.addEventListener('click', deltd);

   function  deltd(e) {
        const item = e.target;
        if (item.classList[0] === "btn2"){
     // e.target.parentElement.remove();
        const todo = tddiv; 
        todo.classList.add("fall");
        //removeLocalTodos(todo);
        todo.addEventListener("transitionend", e => {
      todo.remove();
    });
       
      
};
       if (item.classList[0] === "btn1") {
       const todo = tddiv;
       todo.classList.toggle("completed");
       //console.log(todo);
  }
};

  function saveLocalTodos(todo) {
    let todos;
      if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
    todos =    JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  
};
  
  
};

