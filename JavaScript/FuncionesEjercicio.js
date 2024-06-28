// Create object ST
function Character (name, hability){
this.name = name;
this.hability = hability;

this.displayInfo = function(){
    console.log (`Informacion de personajes de Stranger Things:
        Name: ${this.name}
        Habilidad: ${this.hability}
        `)
}
}

const Eleven = new Character ('Eleven','teliquinesis')
const Mike = new Character ('Will','Creativo')
const Dustin = new Character ('Dustin','Alegre')

Eleven.displayInfo();
Mike.displayInfo();
Dustin.displayInfo();