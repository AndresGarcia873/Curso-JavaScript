export const PI = Math.PI;

export let usuario = "Andres";

// exportar por default solo se puede una vez
// Si se quiere exportar por default una variable let o const se debe exportar abajo
let password = "qwerty";
// export default password;

export default function saludar() {
    console.log("Hola Módulos ES6");
}

// const hello = () => console.log('Hola');
// export default hello;

export class Saludar {
    constructor() {
        console.log("Hola con clases");
    }
}