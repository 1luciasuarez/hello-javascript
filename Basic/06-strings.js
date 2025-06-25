//Strings

//Concatenación
let myName = 'Lucia';
let greeting = 'Hola, ' + myName + '!';
console.log(greeting);
console.log(typeof greeting);

//Longitud
console.log(greeting.length);

//acceso a caracteres
console.log(greeting[0]);
console.log(greeting[11]);

//metodos comunes
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf('Lucia'));
console.log(greeting.includes('Hola'));
console.log(greeting.slice(0, 2));
console.log(greeting.replace('Lucia', 'Kaede'));

//template literals

let message = `Hola, este es mi curso
de javascript`;
console.log(message);

let email = 'luciasuarez@gmail.com';

console.log(`Hola, ${myName}! tu email es ${email}`);
