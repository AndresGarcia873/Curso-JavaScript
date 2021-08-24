let contador = 0;

while (contador <= 10) {
    console.log(`While: número ${contador}.`);
    contador++;
}

do {
    console.log(`Do While: número ${contador}.`);
    contador++;
} while (contador <= 20);


for (let i = 0; i <= 10; i++) {
    console.log(`For: número ${i}.`);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

const ANDRES = {
    nombre: "Andres",
    apellido: "Garcia",
    edad: 19
}

for (const propiedad in ANDRES) {
    console.log(`Key: ${propiedad}, Value: ${ANDRES[propiedad]}`);
}

for (const elemento of numeros) {
    console.log(elemento);
}

let cadena = "Hola Mundo";

for (const caracter of cadena) {
    console.log(caracter);
}