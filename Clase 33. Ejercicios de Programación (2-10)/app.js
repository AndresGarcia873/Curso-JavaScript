// Ejercicios de Programación (2-10)

// 1.

function invertirTexto(cadena) {
    let resultado = cadena.toString();
    return console.log(resultado.split('').reverse().join(''));
}

invertirTexto('Hola Mundo');

// 2.

function repTexto(cadena, palabra) {
    let resultado = cadena.toString();
    let i = 0;
    let cont = 0;
    while (i !== -1) {
        i = resultado.indexOf(palabra, i);
        if (i !== -1) {
            i++;
            cont++;
        }
    }
    return console.log(cont);
}

repTexto('hola mundo adios mundo', 'mundo');

// 3.

function palindromo(cadena) {
    let resultado = cadena.toString();
    resultado = resultado.toLowerCase();
    let alReves = resultado.split('').reverse().join('');
    return (resultado === alReves) ? console.log('Es palindromo') : console.log('No es palindromo');
}


palindromo('Salas');

// 4.

const eliminarCaracteres = (texto = "", patron = "") => (!texto) ? console.warn("No ingresaste un texto") : (!patron) ? console.warn('No ingresaste un patron de caracteres') : console.info(texto.replace(new RegExp(patron, "ig"), ''));

eliminarCaracteres('xyz1 xYz2 Xyz3 xyz4 y xyZ5', 'xyz');