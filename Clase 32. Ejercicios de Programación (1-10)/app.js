// Ejercicios de Programación (1-10)

// 1.

function contarCaracteres(cadena) {
    let resultado = cadena.toString();
    return console.log(resultado.length);
}

contarCaracteres('Hola Mundo');

// 2.

function recortarTexto(cadena, numero) {
    let texto = cadena.toString();
    let resultado = texto.slice(0, numero);
    return console.log(resultado);
}

recortarTexto('Hola Mundo', 4);

// 3.

function separarTexto(cadena, caracter) {
    let texto = cadena.toString();
    let resultado = texto.split(caracter)
    return console.log(resultado);
}

separarTexto('Hola que tal', ' ');

// 4.

function repetirTexto(cadena, numero) {
    let resultado = 0;
    let texto = cadena.toString();
    texto += ' ';
    for (let i = 0; i < numero; i++) {
        resultado = texto.repeat(numero);
    }
    return console.log(resultado);
}

repetirTexto('Hola Mundo', 3);