function add(){
    let numberD = document.getElementById('number');
    let number = parseInt(numberD.innerHTML);
    number++;
    numberD.innerHTML = number;
   
}

function reset(){
    let number = document.getElementById('number');
     number.innerHTML = 0;
}

function decrease(){
   let numberD = document.getElementById('number');
   let number = parseInt(numberD.innerHTML);
    if(number == 0){
        console.log('no se permiten numeros negativos');
    }else{
        number--;
    }
    numberD.innerHTML = number;
};

export {add, reset, decrease}