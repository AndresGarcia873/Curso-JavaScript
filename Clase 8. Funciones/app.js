/*
Una función es un bloque de código,
autocontenido, que se puede definir una
vez y ejecutar en cualquier momento.
*/

/* ------------------------------ */
// Función Declarada 
function estoEsUnaFuncion() {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

function unaFuncionQueDevuelveValor() {
    return console.log("Hola Mundo");
}

function saludar(nombre = "Clasificado", edad = 0) {
    return console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

funcionDeclarada();

function funcionDeclarada() {
    console.log("Esto es una funcion declarada puede invocarse en cualquier lado.");
}
/* ------------------------------ */

/* ------------------------------ */
// Función Expresada ó Función Anónima

// Las funciones expresadas NO pueden ser llamadas antes 

// funcionExpresada();  --Da error por ser función expresada--
const funcionExpresada = function() {
    console.log("Esto es una función expresada.");
}

// funcionExpresada();

/* ------------------------------ */

/* ------------------------------ */
// Invocaciones de Funciones
unaFuncionQueDevuelveValor();
saludar("Andres Garcia", 19);
estoEsUnaFuncion();
/* ------------------------------ */