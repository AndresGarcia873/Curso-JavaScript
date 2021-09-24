// Ejercicios de Programación (5-10)

// 1.

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn('No ingresaste el número a convertir');

    if (typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado. NO es un número`);

    if (base === undefined) return console.warn('No ingresaste la base a convertir');

    if (typeof base !== 'number') return console.error(`El valor "${base}" ingresado. NO es un número`);

    if (base === 2) {
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    } else if (base === 10) {
        return console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`);
    } else {
        return console.error('El tipo de base a convertir NO es valido');
    }
}

convertirBinarioDecimal(114, 10);

// 2.

const aplicarDescuento = (monto = undefined, descuento = 0) => {
    if (monto === undefined) return console.warn('No ingresaste el monto');

    if (typeof monto !== 'number') return console.error(`El valor "${monto}" ingresado. NO es un número`);

    if (monto === 0) return console.error('El monto no puede ser 0');

    if (Math.sign(monto) === -1) return console.error('El monto no puede ser negativo');

    if (typeof descuento !== 'number') return console.error(`El valor "${descuento}" ingresado. NO es un número`);

    if (Math.sign(descuento) === -1) return console.error('El descuento no puede ser negativo');

    return console.info(`$${monto} - ${descuento}% = $${monto - ((monto * descuento) / 100)}`);
}

aplicarDescuento(1000, 20);

// 3.

const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn('No ingresaste la fecha');

    if (!(fecha instanceof Date)) return console.error('El valor que ingresaste no es una fecha válida');

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();

    let aniosEnMS = 1000 * 60 * 60 * 24 * 365,
        aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

    return (Math.sign(aniosHumanos) === -1) ?
        console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`) :
        (Math.sign(aniosHumanos) === 1) ?
        console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}.`) :
        console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
}

calcularAnios(new Date(2022, 0, 14));