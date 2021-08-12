const a = {};

const b = {
    nombre: "Andres",
    apellido: "Garcia",
    edad: 19,
    pasatiempos: ["leer", "hacer ejercicio", "estudiar"],
    soltero: true,
    contacto: {
        email: "andrespaez873@gmail.com",
        celular: "3228466420",
        direccion: "dg. 136 bis no 3-59"
    },
    saludar: saludar(),
    decirMiNombre: function() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    }
};

function saludar() {
    return "Hola Mundo";
}


console.log(a);
console.log(b);
console.log(b.nombre);
console.log(b["apellido"]); // Ya casi no se usa de esta forma
b.decirMiNombre();
console.log(Object.keys(b));
console.log(Object.values(b));
console.log(b.hasOwnProperty("nombre")); // Evalua si una propiedad se encuentra en el objeto