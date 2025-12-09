import {add, reset, decrease} from './counter.js'


//Aquí estarán los eventos que ejecutarán cada una de las funciones realizadas
let decreaseButton = document.getElementById("decrease");
let resetButton = document.getElementById("reset");
let addButton = document.getElementById("add");


decreaseButton.addEventListener("click", decrease);
resetButton.addEventListener("click", reset);
addButton.addEventListener("click", add);