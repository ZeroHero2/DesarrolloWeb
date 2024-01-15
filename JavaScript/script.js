const titulo = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const Result = document.querySelector('.Result');
const Form = document.querySelector('#form');

Form.addEventListener("submit", SendInformation);

function SendInformation(event){
    event.preventDefault();   
   const Suma = (input1.value + input2.value);
    Result.innerText = "Tu resultado es:" + Suma; 

    alert("Informacion enviada")
}

console.log("Hello!");