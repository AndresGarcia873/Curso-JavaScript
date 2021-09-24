// Ejercicios de Programación (4-10)

// 1.

const esPrimo = (numero = undefined) => {

    if (numero === undefined) return console.warn('No ingresaste un número');

    if (typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado, NO es un número`);

    if (numero === 0) return console.error('El número no puede ser 0');

    if (numero === 1) return console.error('El número no puede ser 1');

    if (Math.sign(numero) === -1) return console.error('El número no puede ser negativo');

    let divisible = false;

    for (let i = 2; i < numero; i++) {
        if ((numero % i) === 0) {
            divisible = true;
            break;
        }
    }
    return (divisible) ? console.info(`El número ${numero}. NO es primo`) : console.info(`El número ${numero}. SÍ es primo`);
}

esPrimo(200);

// 2.

function esParOImpar(numero = undefined) {
    if (numero === undefined) return console.warn('No ingresaste un número');

    if (typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado, NO es un número`);

    return (numero % 2 === 0) ? console.info(`El número ${numero} es par`) : console.info(`El número ${numero} es impar`);
}

esParOImpar(19);

// 3.

const convertirGrados = (grados = undefined, unidad = undefined) => {
    if (grados === undefined) return console.warn('No ingresaste grados a convertir');

    if (typeof grados !== 'number') return console.error(`El valor "${grados}" ingresado. NO es un número`);

    if (unidad === undefined) return console.warn('No ingresaste el tipo de grado a convertir');

    if (typeof unidad !== 'string') return console.error(`El valor "${unidad}" ingresado. NO es una cadena de texto`);

    if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn('Valor de unidad no reconocido');

    if (unidad === 'C') {
        return console.info(`${grados}°C = ${Math.round((grados * (9 / 5) + 32))}°F`);
    } else if (unidad === 'F') {
        return console.info(`${grados}°F = ${Math.round(((grados - 32) * (5 / 9)))}°C`);
    }
}

convertirGrados(100, 'F');