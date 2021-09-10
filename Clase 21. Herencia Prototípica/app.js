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

// Herencia Prototípica
function Perro(nombre, genero, tamanio) {
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

// Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescitura de métodos del Prototipo padre en el hijo
Perro.prototype.sonar = function() {
    console.log("Soy un perro y mi sonido es un ladrido");
}

// Creando metodo a perro
Perro.prototype.ladrar = function() {
    console.log("Guauuu Guauuu!!!");
}

const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
    bugsBunny = new Animal("BugsBunny", "Macho"),
    tony = new Perro("Tony", "Macho", "Gigante");

console.log(snoopy);
console.log(bugsBunny);
console.log(tony);

snoopy.sonar();
snoopy.saludar();

bugsBunny.sonar();
bugsBunny.saludar();

tony.sonar();
tony.saludar();
tony.ladrar();