// Declarar una funcion 
function calcularDescuento (precio, descuentoPorcentaje){
const descuento = (precio * descuentoPorcentaje) / 100;
const precioConDescuento = precio - descuento;

return precioConDescuento;
}

const precio = 100;
const descuentoPorcentaje = 20;
const calcularPrecioDescuento = (precio - descuentoPorcentaje)

console.log("El precio original es: " + precio);
console.log("El descuento original es: " + descuentoPorcentaje + "%");
console.log("El precio con descuento: " + calcularPrecioDescuento); 

// ------- Uso de This --------
//Se conoce como enlace implicito

const house = {
    dogName: "Pelusa",
    dogGretting: function (){
        console.log(`Hello, my name is ${this.dogName}`)
    }
}
house.dogGretting();

// Se crea el objeto y la funcion por separado / Objeto y Metodo 
//Se conoce como enlace explicito
const newHouse = {
    nomDog: "Tilin",
    ageDog: 12,
    owner: "Jafeth"
}

function saludoPerro(){
    console.log(`Hola el nombre de mi perro es ${this.nomDog}, tiene ${this.ageDog} y su dueño es: ${this.owner}`)
}

saludoPerro.call(newHouse);
// Se puede llamar con apply y array
const owner = 'Jafeth'
const address = 'Calle123'

function dogGretting (owner,address){
    console.log(`Hola mi nombre es ${this.name}, mi dueño es ${owner} y mi direccion es ${address}`)
}
const dog = {
    name: 'Fido'
}
// Se pasan los parametros 
const necessaryValues = [owner,address]
// Se pasa la funcion - metodo (objeto) - parametros
dogGretting.apply(dog, necessaryValues)


//Lexical Bindings --------------------------------
//Creacion de mi objeto y metodos
const finctionalCharacter = {
    name: 'Uncle Ben',
    saySomething: function(message){
        console.log(`El ${this.name} dice: ${message}`)
    },
    saySomethingArrow:(message) =>{
        console.log(`El ${this.name} dice: ${message}`)
    }
}
finctionalCharacter.saySomething('Un gran poder conlleva una gran responsabilidad')
finctionalCharacter.saySomethingArrow('Cuidado hombre araña')

// ----- Funciones constructoras --------
// Se crean objetos dentro de funciones 
function Rocket (name){
    this.name = name
    this.launchMessage = function(){
        console.log('Despeguen!!!')
    }
}
const falcon9Rocket = new Rocket 

// Ejemplo estudiante funcion
function estudiante (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

// Crear mi objeto 
let estudiante1 = new estudiante("Juanito", 23);
let estudiante2 = new estudiante("Sofia", 19);

// Mando a llamar mis estudiantes y atributos 
console.log (estudiante1.nombre);
console.log (estudiante1.edad)


// ---- Uso de Window ----
window.name = 'Batman'

function Character (){
    console (this.name)
}

Character ();

// -------- Funciones con Binding -----------
// Implicit Binding:
const person = {
    name: 'Adam',
    greet: function() {
      console.log(`Hello, I'm ${this.name}`);
    }
  };
  
  person.greet(); // Output: Hello, I'm Adam
//   Explicit Binding:
function greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
  
  const adam = { name: 'Adam' };
  
  greet.call(adam); // Output: Hello, I'm Adam
  
//   New Binding:
