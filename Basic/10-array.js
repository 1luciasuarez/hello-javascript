//array

//declaracion
let myArray = [2];
console.log(myArray);

//inicializacion
myArray = [1, 2, 3, 4];
console.log(myArray);

myArray = [];
myArray[2] = 'Lucia';
myArray[3] = 'Suarez';
console.log(myArray);

//metodos comunes

myArray = [];

//push y pop
myArray.push('Lucia');
myArray.push('Belen');
myArray.push('Suarez');
myArray.push('Carnero');
console.log(myArray);

console.log(myArray.pop()); //elimina el ultimo y lo devuelve
myArray.pop();
console.log(myArray);

//shif y unshift
console.log(myArray.shift());
console.log(myArray);

myArray.unshift('Lucia', 'kaede');
console.log(myArray);

//length
console.log(myArray.length);

//clear
myArray = [];
myArray.clear;
console.log(myArray);

//slice
myArray = ['Lucia', 'Belen', 'kaede', 20, true];
let myNewArray = myArray.slice(1, 3);
console.log(myArray);
console.log(myNewArray);

//splice

//---------desde-hasta
myArray.splice(1, 3);
console.log(myArray);

myArray = ['Lucia', 'Belen', 'kaede', 20, true];
myArray.splice(1, 2, 'nueva entrada');
console.log(myArray);
