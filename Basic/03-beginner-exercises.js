//1. Escribe un comentario en una línea.

//comentario en una linea

//2. Escribe un comentario en varias líneas.

/*
un comentario entre
varias lineas
*/

//3. Declara variables con valores asociados a todos los datos de tipo primitivos.
let myName2 = 'Luci';
let age2 = 20;
let isStudent2 = true;
let undefinedValue2;
let nullValue2 = null;
let mySymbol2 = Symbol('mysymbol');
let myBigInt3 = 39141293819128731902837012793177678678n;

//4. Imprime por consola el valor de todas las variables.
console.log(myName2);
console.log(age2);
console.log(isStudent2);
console.log(undefinedValue2);
console.log(nullValue2);
console.log(mySymbol2);
console.log(myBigInt3);

//5. Imprime por consola el tipo de todas las variables.
console.log(typeof myName2);
console.log(typeof age2);
console.log(typeof isStudent2);
console.log(typeof undefinedValue2);
console.log(typeof nullValue2);
console.log(typeof mySymbol2);
console.log(typeof myBigInt3);

//6. A continuación, modifica los valores de las variables por otros del mismo tipo.
myName2 = 'Belen';
age2 = 21;
isStudent2 = false;
undefinedValue2 = undefined;
nullValue2 = null;
mySymbol2 = Symbol('mysymbol2');
myBigInt3 = 239141293819128731902837012793177678678n;

//7. A continuación, modifica los valores de las variables por otros de distinto tipo.
myName2 = 20;
age2 = 'Luci';
isStudent2 = null;
undefinedValue2 = 239141293819128731902837012793177678678n;
nullValue2 = Symbol('mysymbol');
mySymbol2 = false;
myBigInt3 = 657.546;

//8. Declara constantes con valores asociados a todos los tipos de datos primitivos.
const constMyName3 = 'Luci';
const constAge3 = 20;
const constIsStudent3 = true;
const constUndefinedValue3 = a;
const constNullValue3 = null;
const constMySymbol3 = Symbol('mysymbol3');
const constMyBigInt4 = 339141293819128731902837012793177678678n;

//9. A continuación, modifica los valores de las constantes.
constMyName3 = 'Maria';
constAge3 = 19;
constIsStudent3 = false;
constUndefinedValue3 = c;
constNullValue3 = null;
constMySymbol3 = Symbol('mysymbol3');
constMyBigInt4 = 2339141293819128731902837012793177678678n;

//10. Comenta las líneas que produzcan algún tipo de error al ejecutarse.
//const myName3 = 'Maria 2';
//console.log(myName3);
