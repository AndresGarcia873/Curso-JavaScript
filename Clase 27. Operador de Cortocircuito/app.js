// Operador de Cortocircuito

/* 
Cortocircuto OR - cuando el valor de la izquierda en la
expresión siempre pueda validar a true, es el valor que 
se cargará por defecto

Cortocircuito AND - cuando el valor de la izquierda en 
la expresión siempre pueda validar a false, es el valor 
que se cárgara por defecto
*/

function saludar(nombre) {
    nombre = nombre || "Desconicido";
    console.log(`Hola ${nombre}`);
}

saludar();
console.log("cadena" || "Valor de la derecha");
console.log(19 || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log(false || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log(0 || "Valor de la derecha");

console.log(false && "Valor de la derecha");
console.log(null && "Valor de la derecha");
console.log(undefined && "Valor de la derecha");
console.log("" && "Valor de la derecha");
console.log(0 && "Valor de la derecha");