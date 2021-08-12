// Las constantes no se pueden declarar vacias 
//     const NUEVE;

const PI = 3.1416;

console.log(PI);
//PI = 3.15  --No se puede modificar porque es una constante y el tipo de dato es primitivo

a = "kenai";
console.log(a);

const objeto = {
    nombre: "andres",
    edad: 19
}

const colores = ["blanco", "negro", "azul"];

console.log(objeto);
console.log(colores);

// --Si se puede modificar porque aunque sea una constante el tipo de dato es compuesto
objeto.correo = "andrespaez873@gmail.com";
colores.push("anaranjado");

console.log(objeto);
console.log(colores);