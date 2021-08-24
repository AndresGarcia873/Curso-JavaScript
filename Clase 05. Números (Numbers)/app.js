let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6";

console.log(a, b, c);
// Número de decimales a mostrar ej: c.toFixed(number)
console.log(c.toFixed(1));
console.log(c.toFixed(5));
// ------------------------
// Pasar de texto a número o mostrar solo parte entera 
console.log(parseInt(c));
// Mostrar número con decimales
console.log(parseFloat(c));
// Mostrar tipo de número
console.log(typeof c, typeof d);
console.log(a + b);
// Suma con texto transformado a número
// Con ParseInt suma solo el numero entero ej: 7.19 + 5.6 = 12.190000000000001
console.log(c + parseInt(d));
// Con ParseFloat suma tambien con decimales ej: 7.19 + 5.6 = 12.79
console.log(c + parseFloat(d));