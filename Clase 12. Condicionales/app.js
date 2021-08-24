let edad = 19;

if (edad >= 18) {
    console.log("Eres mayor de Edad");
} else {
    console.log("Eres menor de Edad");
}

// if - else if - else

let hora = 25;
if (hora >= 0 && hora <= 5) {
    console.log("Déjame dormir");
} else if (hora >= 6 && hora <= 11) {
    console.log("Buenos días");
} else if (hora >= 12 && hora <= 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas Noches");
}

// Operador Ternario  (condición) ? verdadero : falsa

console.log("Operador Ternario");

let eresMayor = (edad >= 18) ? "Eres mayor de Edad" : "Eres menor de Edad";

console.log(eresMayor);

// Switch - case

let dia = 7;
switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Número de día incorrecto.");
        break;
}