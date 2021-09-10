// Objeto console

console.log(console);

console.error("Esto es un error.");

console.warn("Esto es un aviso.");

console.info("Esto es un mensaje informativo");

console.log("Un registro de lo que ha paso en nuestra aplicación");


let nombre = "Andres",
    apellido = "Garcia",
    edad = 19;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);

// console.clear();

console.log(window);
console.log(document);
console.dir(document);

console.group("Frameworks");
console.log("Angular");
console.log("React");
console.log("Vue js");
console.groupEnd();

console.groupCollapsed("Frameworks");
console.log("Angular");
console.log("React");
console.log("Vue js");
console.groupEnd();

// Mostrar tabla del objeto consola
console.table(Object.entries(console));
// Mostrar tabla del objeto consola de forma alfabetica
console.table(Object.entries(console).sort());

const numeros = [1, 2, 3, 4, 5],
    vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const perro = {
    nombre: "Boni",
    raza: "Boxer",
    color: "Cafe"
};

console.table(perro);

// Console.time sirve para tomar el tiempo de cuanto tarda el código en ejecutarse
console.time("tiempo de ejecución");
const arreglo = Array(1000000);

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}

console.timeEnd("tiempo de ejecución");
console.log(arreglo);

// Para saber cuantas veces se ejecuto un código
for (let i = 0; i <= 10; i++) {
    console.count("Codigó for");
    console.log(i);
}

let x = 1,
    y = 2,
    pruebaXY = "Se espera que X siempre sea menor que Y";

console.assert(x < y, [x, y, pruebaXY]);