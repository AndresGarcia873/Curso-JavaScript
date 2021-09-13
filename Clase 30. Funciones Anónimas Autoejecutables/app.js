// Funciones Anónimas Autoejecutables

(function() {
    console.log("Mi primer IIFE");
})();

(function(d, w, c) {
    console.log("Mi segunda IIFE");
    console.log(d);
    console.log(w);
    console.log(c);
    c.log("Esto es un console.log");
})(document, window, console);

// Formas de crear IIFE

// Clásica
(function() {
    console.log('versión Clásica');
})();

// La Crockford (JavaScript The Good Parts)
((function() {
    console.log('versión Crockford');
})());

// Unaria
+

function() {
    console.log('versión Unaria');
}();

// Facebook
! function() {
    console.log('versión Facebook');
}();