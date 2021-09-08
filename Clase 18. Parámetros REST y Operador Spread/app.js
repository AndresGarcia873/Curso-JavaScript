// Parámetros REST

// Los puntos suspensivos es el parametro REST
function sumar(a, b, ...c) {
    let resultado = a + b;

    c.forEach(function(n) {
        resultado += n
    });

    return resultado;
}

console.log(sumar(5, 7, 6, 8, 10, 9));

// Operador de propagación o el operador Spread

const arr1 = [1, 2, 3, 4, 5],
    arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

// Los puntos suspensivos es el spread operator
const arr3 = [...arr1, ...arr2];

console.log(arr3);