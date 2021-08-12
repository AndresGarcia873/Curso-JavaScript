// Variable de ambito global
var hola = "Hola Mundo";

// Variable de ambito de bloque
let hello = "Hello World";

console.log(hola);
console.log(hello);
console.log(window);
console.log(window.hola);
console.log(window.hello);

console.log("--------var--------");

var musica = "Rock";
console.log("Variable Música antes del Bloque", musica); {
    var musica = "Pop";
    console.log("Variable Música dentro del Bloque", musica);
}
console.log("Variable Música despues del Bloque", musica);

console.log("--------let--------");

let musica2 = "Rock";
console.log("Variable Música antes del Bloque", musica2); {
    let musica2 = "Pop";
    console.log("Variable Música dentro del Bloque", musica2);
}
console.log("Variable Música despues del Bloque", musica2);