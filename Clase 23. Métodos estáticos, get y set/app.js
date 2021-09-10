// Métodos estáticos, get y set

/* Un método estático se pueden ejecutar sin
necesidad de instanciar la clase */

class Perro {

    constructor(nombre, genero, tamanio) {
        this.nombre = nombre;
        this.genero = genero;
        this.tamanio = tamanio;
        this.raza = null;
    }

    // Ejemplo método estatico
    static queEres() {
        console.log("Los perros somos animales mamíferos que pertenecemos a la familia de los caninos.");
    }

    /* Los getters y setters son métodos especiales que 
       nos permiten establecer y obtener los valores de
       atributos de nuestra clase */
    get getRaza() {
        return this.raza;
    }

    set setRaza(raza) {
        this.raza = raza;
    }
}

Perro.queEres();

const scooby = new Perro("Scooby", "Macho", "Gigante");

scooby.setRaza = "Grán Danés";
console.log(scooby.getRaza);