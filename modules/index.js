import addLocal from "./local.js"



let btnTask = document.querySelector(".task-btn")
let todoTask = document.getElementById("todo-task")
let completeTask = document.getElementById("complete-task")
let inputTask = document.getElementById("input-task")
let pp = document.getElementsByTagName("p")
let span = document.getElementById("span")
var res = document.getElementById("content") 


let unid = Date.now()

btnTask.addEventListener("click", () => {
   
    addLocal(unid , inputTask.value )
   

})








