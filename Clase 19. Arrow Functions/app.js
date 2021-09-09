// Arrow Functions

// const saludar = () => console.log("hola");

// saludar();

const saludar = nombre => console.log("hola " + nombre);

saludar('andres');

// const sumar = function(a, b) {
//     return a + b;
// };

const sumar = (a, b) => a + b;

console.log(sumar(9, 9));

const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

funcionDeVariasLineas();

const numeros = [1, 2, 8, 4, 5];

numeros.forEach((e, idx) => console.log(`${e} esta en la posición ${idx}.`));

// function Perro() {
//     console.log(this);
// }

// Perro();

const perro = {
    nombre: 'Tony',
    ladrar() {
        console.log(this);
    }
}

perro.ladrar();