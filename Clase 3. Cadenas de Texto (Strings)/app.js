let nombre = "Andres";
let apellido = 'Garcia';
let saludo = new String("Hola Mundo");
let lorem = "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium excepturi vero, eos sed tempora minima ipsam. At ea deserunt, quis commodi natus ex eveniet, temporibus eaque, cumque placeat odit voluptas?"

console.log(nombre, apellido, saludo);
console.log(
    nombre.length,
    apellido.length,
    saludo.length,
    nombre.toUpperCase(),
    apellido.toLocaleLowerCase(),
    lorem.includes("amet"),
    lorem.includes("andres"),
    lorem,
    lorem.trim(),
    lorem.split(" "),
    lorem.split(","),
);