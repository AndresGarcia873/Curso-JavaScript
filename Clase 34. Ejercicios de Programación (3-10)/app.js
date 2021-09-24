// Ejercicios de Programación (2-10)

// 1.

const numeroRandom = () => console.info(Math.round((Math.random() * 100) + 500));

numeroRandom();

// 2.

const capicua = (numero = 0) => {
    if (!numero) return console.warn('No ingresaste un número');

    if (typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado, NO es un número`);

    numero = numero.toString();

    let alReves = numero.split('').reverse().join('');

    return (numero === alReves) ? console.info(`El número ${numero} es capicua`) : console.info(`El número ${numero} no es capicua`);
}

capicua(2002);

// 3.

const factorialNumero = (numero = undefined) => {
    if (numero === undefined) return console.warn('No ingresaste un número');

    if (typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado, NO es un número`);

    if (numero === 0) return console.error('El número no puede ser 0');

    if (Math.sign(numero) === -1) return console.error('El número no puede ser negativo');

    let factorial = 1;

    for (let i = numero; i > 1; i--) {
        factorial *= i;
    }
    return console.info(`El factorial del número ${numero} es ${factorial}`);
}

factorialNumero(8);