let CajaDeAndy = "Woody";
console.log(CajaDeAndy);

//Datos primitivos Inmutables
number = 20;
number = number + 10;
console.log(number);

let esVerdadero = true;
esVerdadero = false;
console.log(esVerdadero);

// Datos Complejos Mutables
let usuario = {nombre: "Pepito", edad: 15}
usuario.edad=25;
console.log(usuario);

let frutas = ["manzana", "mango"];
frutas [0] = "papaya";
console.log(frutas);


function CambiarNombre (objeto){
    objeto.nombre = "Antonio";
}

let persona = {nombre:"Marco"};

console.log(persona); 

// ------- Paso por valor ------
Numero = 37;
x = Numero;
console.log(Numero, x);

// ------- Paso por referencia  ------
let frutas = ["manzana", "mango"];
CopiaDeFrutas = frutas;
frutas.push = ("sandia");
console.log(frutas, CopiaDeFrutas);

let ropa = {
    pantalon: "👖"
}

ropa.zapato = "👟"

console.log(ropa);

// ------- Creacion de string  ------
const primeraOpcion = "primera"
const segundaOpcion = 'segunda'
const terceraOpcion = `tercera`

// --- 1. Concatenacion: Operador +  ---
const direccion = "5 de mayo"
const ciudad = "Mexico"
const direccionCompleta = "Mi direccion completa es " + direccion + " " + ciudad;
console.log(direccionCompleta);

// --- 2. Concatenacion: Templeate Literals  ---
const nombre = "Jafeth";
const pais = "Mexico"
const presentacion = `Mi nombre es ${nombre} del pais ${pais}`;
console.log(presentacion)

// ------- Conversión de tipos: Type Casting y Coercion  ------
//Explicita **Type Casting**
const string = '42'
const integer = parseInt (string)
const cambioDecimal = parseFloat(string);
console.log (`Este dato es entero ${integer} y este decimal ${cambioDecimal}`)
console.log (typeof integer)
// Implícita **Type Casting**
const suma = '5' + 3;
console.log(suma)

// Perfil social media 
// 1. Informacion de usuaio 
const username = 'ZeroHero'
const fullName = 'Jafeth Jesus'
const age = 23;
const isStudent = true;

// 2. Direccion 
const address = {
    street: '5 de mayo',
    city: 'San Francisco',
    state: 'CodiLand',
    zipCode: '3312'
}

// 3. Hobbies
const hobbies = ['Diseñar', 'Coding', 'Taekwondo']

// 4. Bio 
const TextoPersonalizado = ` Hola soy ${username}.
Tengo ${age} años gatunos.
Vivo en ${address.city} porque es la ciudad preferida de los Minions.
Me encanta ${hobbies.join(', ')} `

//Imprimir texto 
console.log(TextoPersonalizado);