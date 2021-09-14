// Módulos (import - export)

import saludar, { Saludar, PI, usuario } from './constantes.js';
import { aritmetica, aritmetica as art } from './aritmetica.js';

console.log("Modulos");
console.log(PI);
console.log(usuario);

// console.log(aritmetica.sumar(3,4));
console.log(art.sumar(3, 4));
console.log(art.restar(9, 3));
// hello();
saludar();
new Saludar();