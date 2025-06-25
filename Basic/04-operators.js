//Operadores

//operadores aritmeticos

let a = 5;
let b = 10;
console.log(a + b); //suma
console.log(a - b); //resta
console.log(a * b); //multiplicacion
console.log(a / b); //division

console.log(a % b); //modulo
console.log(a ** b); //exponente

a++; //incremento
console.log(a);

b--; //decremento
console.log(b);

//operadores de asignacion
let myVariable = 2;
console.log(myVariable);
myVariable += 2;
console.log(myVariable);

myVariable -= 2;
myVariable *= 2;
myVariable /= 2;
myVariable %= 2;
myVariable **= 2;

//operadores de comparacion
//6  //9
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b); //igualdad por valor
console.log(a === b); //igualdad por identidad (por tipo y valor)
console.log(a != b);
console.log(a !== b);

//Truthy values (valores verdaderos)

//Todos los numeros positivos y negativos menos el cero
//todas las cadenas de texto menos las vacias
// el boolean true

//Falsy values (valores falsos)

//0
//0n
//null
//undefined
//NaN
//el boolean false
//cadenas de texto vacias

//operadores logicos

//and (&&)
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);
console.log(5 > 10 && 15 > 20 && 30 > 40);

//or (||)
// console.log(5 > 10 || 15 > 20);
// console.log(5 < 10 || 15 < 20);
// console.log(5 < 10 || 15 > 20);
// console.log((5 > 10 && 15 > 20) || 30 > 40);

// not (!)
console.log(!true);
console.log(!false);
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));

//operadores ternarios

const isRaining = true;
isRaining ? console.log('Esta lloviendo') : console.log('No está lloviendo');
