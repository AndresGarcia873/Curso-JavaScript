// Prototipos

/* 
Clases - Modelo a seguir
Objetos - Es una instancia de una clases
 Atributos - Es una caracteristica o propiedad del objeto 
    (Son variables dentro de un objeto)
 Metodos - Son las acciones que un objeto puede realizar 
    (Son funciones dentro de un objeto)
*/

// const animal = {
//     nombre: "Snoopy",
//     sonar() {
//         console.log("Hago sonidos porque estoy vivo");
//     }
// }

// const animal2 = {
//     nombre: "Bugs Bunny",
//     sonar() {
//         console.log("Hago sonidos porque estoy vivo");
//     }
// }
// console.log(animal);
// console.log(animal2);

// Función constructora

// function Animal(nombre, genero) {
//     // Atributos
//     this.nombre = nombre;
//     this.genero = genero;
//     // Metodos
//     this.sonar = function() {
//         console.log("Hago sonidos porque estoy vivo");
//     }

//     this.saludar = function() {
//         console.log(`Hola me llamo ${this.nombre}`);
//     }
// }

// Función constructora donde asignamos los métodos
// al prototipo, no a la función como tal
function Animal(nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
}

// Metodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function() {
    console.log("Hago sonidos porque estoy vivo");
}

Animal.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}`);
}

const snoopy = new Animal("Snoopy", "Macho"),
    bugsBunny = new Animal("BugsBunny", "Macho");

console.log(snoopy);
console.log(bugsBunny);

snoopy.sonar();
snoopy.saludar();

bugsBunny.sonar();
bugsBunny.saludar();