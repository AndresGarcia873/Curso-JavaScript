// Operadores

// Aritméticos: +-*/%()

let a = 5 + (5 - 10) * 3;
let modulo = 5 % 2;

console.log(a);
console.log(modulo);

// Relacionales
// >, <, >=, <=, ==, ===, !=, !==

console.log(8 > 9);
console.log(9 > 8);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(7 < 7);
console.log(7 <= 7);

/*
= 1 igual es asignacion de variable
== 2 iguales es comparación de valores
=== 3 iguales es comparación de tipos de datos y valores
*/

console.log(7 == 7);
console.log("7" == 7);
console.log("7" === 7);

// Incremento y Decremento

let i = 6;

i = i + 2;
i += 3;
i++;
i--;
console.log(i);

// Lógicos
/* 
! Not: Niega, es decir lo que esta verdadero es falso y lo que esta falso es verdadero 
|| Or: Con que una sea verdadera sera verdadera
&& And: Todas tienen que ser verdaderas
*/

console.log(!true);
console.log(!false);
console.log((9 === 9) || ("9" === 9));
console.log((9 === 9) && ("9" === 9));