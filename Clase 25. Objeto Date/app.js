// Objeto Date

console.log(Date());

let fecha = new Date();
console.log(fecha);

// día del mes
console.log(fecha.getDate());

// día de la semana D-L-M-M-J-V-S -> 0-1-2-3-4-5-6
console.log(fecha.getDay());

/* mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic 
 -> 0 1 2 3 4 5 6 7 8 9 10 11 */
console.log(fecha.getMonth());

// Año
console.log(fecha.getFullYear());

// Hora
console.log(fecha.getHours());

// Minutos
console.log(fecha.getMinutes());

// Segundos
console.log(fecha.getSeconds());

// Milisegundos
console.log(fecha.getMilliseconds());

// Solo fecha
console.log(fecha.toDateString());

// Fecha y hora de forma facil de leer
console.log(fecha.toLocaleString());

// Fecha de forma facil de leer
console.log(fecha.toLocaleDateString());

// Hora de forma facil de leer
console.log(fecha.toLocaleTimeString());

// Zona geografica representada en minutos Ej: GMT -0500 = 60 minutos * 5 horas = 300 minutos
console.log(fecha.getTimezoneOffset());

// Console para saber la hora del meridiano 0 (Londres)
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());

// Mostrar los segundos desde 1 enero de 1970
console.log(Date.now());

let cumple = new Date(2002, 0, 14, 22);
console.log(cumple);