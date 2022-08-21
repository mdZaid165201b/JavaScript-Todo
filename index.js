
let getCompletedTodos = () => {
  let completedTodosArr = [];
let completedTodos = document
    .getElementsByTagName("input");
    // console.log(completedTodos[0].labels[0].innerText);
for(elem of completedTodos){
    if(elem.checked  === true){
        completedTodosArr.push(elem.id);
    }
}




console.log("arr Data",completedTodosArr);

};


let unCheckAll = () =>{
    console.log("uncheck All Function Called!!!");

    let inputCheckBox = document.getElementsByTagName("input");
    for(elem of inputCheckBox){
        console.log(elem);
        elem.checked ? elem.checked = false : "";
    }
}


let checkedAll = () =>{
    console.log(this);
    let inputCheckBox = document.getElementsByTagName("input");
    for(elem of inputCheckBox){
        console.log(elem);
        elem.checked ? "": elem.checked = true;
    }
}

document.querySelector(".compTodos").addEventListener("click", getCompletedTodos);
document.querySelector(".unCheck").addEventListener("click", unCheckAll);
document.querySelector(".checkAll").addEventListener("click", checkedAll);



let fetchData = async () => {
  let todoDiv = document.querySelector(".todos");
  console.log(todoDiv);

  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    // console.log(data);
    data.forEach((element) => {
      const html = `
        <input type="checkbox" ${element.completed ? "checked" : ""} id="${
        element.id
      }"> <label for="${element.id}">${element.title}</label> <br></br>
    `;

      todoDiv.insertAdjacentHTML("beforeend", html);
    });
    // getCheckedData();
  } catch (err) {
    console.log(err);
  }

  console.log("fetchData Function Called");
};

(() => {
  fetchData();
})();
