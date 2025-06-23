//1. Crea una variable para cada operación aritmética
let a = 20;
let b = 40;
let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let modulo = a % b;
let exponente = a ** b;

//2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas
let myVariable = 5;
myVariable += 2;
myVariable -= 2;
myVariable *= 2;
myVariable /= 2;
myVariable %= 2;
myVariable **= 2;

//3. imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(a < b);
console.log(a != b);
console.log(a <= b);
console.log(a === a);
console.log(a !== b);

//4.Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a > b);
console.log(a == b);
console.log(a >= b);
console.log(a === b);
console.log(a !== a);

//5. Utiliza el operador lógico and
console.log(90 > 100 && 70 > 80);
console.log(90 < 100 && 70 < 80);
console.log(90 < 100 && 70 > 80);
console.log(90 > 100 && 70 > 80 && 30 > 40);

//6. Utiliza el operador logico or
console.log(90 > 100 || 70 > 80); //false
console.log(90 < 100 || 70 < 80); //true
console.log(90 < 100 || 70 > 80); //true

//7. combina ambos operadores logicos
console.log((90 > 100 && 70 > 80) || 30 < 40); // true

//8. añade alguna negación
console.log(!((90 > 100 && 70 > 80) || 30 < 40));

//9.utiliza un operador ternario
const isGirl = true;
isGirl ? console.log('es mujer') : console.log('no es mujer');

//10. combina operadores aritmeticos, de comparación y lógicos

console.log(
  (20 + 50 > 50 + 30 && 20 - 50 < 50 - 30) ||
    (20 + 50 > 50 + 10 && 20 - 50 < 50 - 20)
);
