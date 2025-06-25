//1.Concatena dos cadenas de texto
let mensaje = 'Hola, ';
let mensaje2 = mensaje + '¿Cómo estás?';
console.log(mensaje2);

//2. Muestra la longitud de una cadena de texto
console.log(mensaje2.length);

//3.Muestra el primer y ultimo caracter de un String
console.log(mensaje2[0]);
console.log(mensaje2[17]);

//4. convierte a mayusculas y minusculas un String
console.log(mensaje2.toUpperCase());
console.log(mensaje2.toLowerCase());

//5.Crea una cadena de texto en varias lineas
let text = `Hola, esta es mi tarea 
sobre strings`;
console.log(text);

//6.Interpola el valor de una variable en un String
console.log(`Usuario, ${mensaje2}!`);

//7.reemplaza todos los espacios en blanco de un string por guiones
console.log(mensaje2.replace(' ', '-'));

//8.Comprueba si una cadena de texto contiene una palabra concreta
console.log(mensaje2.includes('Adios'));

//9. comprueba si dos strings son iguales
console.log(mensaje === mensaje2);

//10.Comprueba si dos strings tienen la misma longitud
console.log(mensaje.length === mensaje2.length);
