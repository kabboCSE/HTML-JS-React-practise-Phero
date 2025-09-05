const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayTodo(data);
    });
};

const displayTodo = (todos) => {
  //get todo container
  const getTodoContainer = document.getElementById("todo-container");
  getTodoContainer.innerHTML = "";

  todos.forEach((todo) => {
    //create todo card container
    console.log(todo.title);
    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
            <div class = "todoCard">
            <p>${todo.id}</p>
             <p>${
               todo.completed == true
                 ? `its true <i class="fa-solid fa-square-check"></i>`
                 : "it's false"
             }
             </p>
        <h3>${todo.title}</h3>
            </div>
       
        `;

    getTodoContainer.append(todoCard);
  });
};
loadTodo();
