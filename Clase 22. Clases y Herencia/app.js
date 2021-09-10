// Clases y Herencia

class Animal {

    /* El constructor es un método especial que se
    ejecuta en el momento de instanciar la clase */
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

class Perro extends Animal {

    constructor(nombre, genero, tamanio) {
        /* Con el método super() se manda a llamar 
        el constructor de la clase padre*/
        super(nombre, genero);
        this.tamanio = tamanio;
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar() {
        console.log("Guauuu Guauuu!!!");
    }
}

const mimi = new Animal("Mimi", "Hembra"),
    scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
console.log(scooby);

mimi.saludar();
mimi.sonar();

scooby.saludar();
scooby.sonar();
scooby.ladrar();