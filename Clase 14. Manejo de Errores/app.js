try {
    console.log("En el try se agrega el código a evaluar");
    noExiste;
    console.log("Segundo mensaje en el try");
} catch (error) {
    console.log("Catch, captura cualquier error surgido o lanzado en el try");
    console.error(error);
} finally {
    console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch")
}

try {
    let numero = "y";
    if (isNaN(numero)) {
        throw new Error("El caracter introducido no es un Número.");
    }
    console.log(numero * numero);
} catch (error) {
    console.error(`Se produjo el siguiente error: ${error}`);
}