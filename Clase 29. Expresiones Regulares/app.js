// Expresiones Regulares

/* Son una secuencia de caracteres que forma un pátron
de búsqueda, principalmente utilizada para la 
búsqueda de patrones de cadenas de caracteres */

let cadena = "lorem lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt enim neque itaque rerum nostrum eaque aliquam quia! Amet repellat consequuntur quisquam eveniet modi veritatis eum illo quam accusamus porro!"

// let expresion = new RegExp("lorem", "ig");
// console.log(expresion.test(cadena));
// console.log(expresion.exec(cadena));

let expReg = /lorem/ig;
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));