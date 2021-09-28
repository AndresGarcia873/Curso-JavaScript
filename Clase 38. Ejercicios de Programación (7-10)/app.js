// Ejercicios de Programación (7-10)

// 1.

const elevarArreglo = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn(`No ingresaste un arreglo de números`);
    if (!(arreglo instanceof Array)) return console.error(`El valor "${arreglo}" ingresado, NO es un arreglo`);
    if (arreglo.length === 0) return console.error("El arreglo esta vacío");

    for (let num of arreglo) {
        if (typeof num !== "number") return console.warn(`El valor "${num}" ingresado, NO es un número`);
    }

    const newArreglo = arreglo.map(num => num *= num);
    return console.info(`Arreglo original: ${arreglo}.\nArreglo elevado al cuadrado: ${newArreglo}`);
}

elevarArreglo([1, 4, 5]);

// 2.

const arrayMinMax = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn(`No ingresaste un arreglo de números`);
    if (!(arreglo instanceof Array)) return console.error(`El valor "${arreglo}" ingresado, NO es un arreglo`);
    if (arreglo.length === 0) return console.error("El arreglo esta vacío");

    for (let num of arreglo) {
        if (typeof num !== "number") return console.warn(`El valor "${num}" ingresado, NO es un número`);
    }

    return console.info(`Arreglo original: ${arreglo}\nValor Mayor: ${Math.max(...arreglo)}\nValor Menor: ${Math.min(...arreglo)}`);
}

arrayMinMax([1, 4, 5, 99, -60]);

// 3.

const arrayParImpar = (arreglo = undefined) => {
    if (arreglo === undefined) return console.warn(`No ingresaste un arreglo de números`);
    if (!(arreglo instanceof Array)) return console.error(`El valor "${arreglo}" ingresado, NO es un arreglo`);
    if (arreglo.length === 0) return console.error("El arreglo esta vacío");

    for (let num of arreglo) {
        if (typeof num !== "number") return console.warn(`El valor "${num}" ingresado, NO es un número`);
    }

    return console.info({
        pares: arreglo.filter(num => num % 2 === 0),
        impares: arreglo.filter(num => num % 2 === 1)
    });
}

arrayParImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);