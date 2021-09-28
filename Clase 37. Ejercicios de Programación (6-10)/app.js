// Ejercicios de Programación (6-10)

// 1.

const contarLetras = (cadena = "") => {
    if (!cadena) return console.warn("No ingresaste una cadena de texto");
    if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);

    let vocales = 0;
    let consonantes = 0;

    cadena = cadena.toLowerCase();

    for (let letra of cadena) {
        if (/[aeiouáéíóú]/.test(letra)) vocales++;
        if (/[bcdfghijklmnñpqrstvwxyz]/.test(letra)) consonantes++;
    }

    return console.info({
        cadena,
        vocales,
        consonantes
    });
}

contarLetras('Hola Mundo');

// 2.

const validarNombre = (nombre = "") => {
    if (!nombre) return console.warn("No ingresaste un nombre");
    if (typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado, NO es una cadena de texto`);

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);

    return (expReg) ? console.info(`"${nombre}", es un nombre válido`) : console.warn(`"${nombre}", NO es un nombre válido`);
}

validarNombre('Andrés García');

//3.

const validarCorreo = (correo = "") => {
    if (!correo) return console.warn("No ingresaste un correo");
    if (typeof correo !== "string") return console.error(`El valor "${correo}" ingresado, NO es un correo`);

    let expReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i.test(correo);

    return (expReg) ? console.info(`"${correo}", es un correo válido`) : console.warn(`"${correo}", NO es un correo válido`);
}

validarCorreo('andrespaez873@gmail.com');

// Validar patrones 

const validarPatron = (cadena = "", patron = undefined) => {
    if (!cadena) return console.warn("No ingresaste una cadena de texto a evaluar");
    if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
    if (patron === undefined) return console.warn("No ingresaste un patron a evaluar");
    if (!(patron instanceof RegExp)) return console.error(`El valor "${patron}" ingresado, NO es una expresión regular`);

    let expReg = patron.test(cadena);

    return (expReg) ? console.info(`"${cadena}", cumple con el patrón ingresado`) : console.warn(`"${cadena}", NO cumple con el patrón ingresado`);
}

validarPatron('Andres Garcia19', /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g);