// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.
let nombre = 'Lucia';
if (nombre == 'Lucia') {
  console.log(nombre);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos.
let usuario = '1luciasuarez';
let contraseña = 'lucia123';
if (usuario == '1luciasuarez' && contraseña == 'lucia123') {
  console.log('Ingreso exitoso');
}

// 3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje.
let numero = -3;
if (numero > 0) {
  console.log('el numero es positivo');
} else if (numero < 0) {
  console.log('el numero es negativo');
} else {
  console.log('el numero es cero');
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le faltan.
let edad = 12;
if (edad >= 18) {
  console.log('puede votar');
} else {
  console.log(`no puede votar, le faltan ${18 - edad} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .
let edadPersona = 12;
let persona = edad >= 18 ? 'adulto' : 'menor';
console.log(persona);

// 6. Muestra en que estacion del año nos encontramos dependiendo del valor de una variable "mes".
let mes = 9;
if (mes === 1 || mes === 2 || mes === 12) {
  console.log('Verano');
} else if (mes === 3 || mes === 4 || mes === 5) {
  console.log('otoño');
} else if (mes === 6 || mes === 7 || mes === 8) {
  console.log('Invierno');
} else if (mes < 1 || mes > 12) {
  console.log(
    'los numeros de meses son del 1 al 12, coloque bien su numero porfavor'
  );
} else {
  console.log('primavera');
}

// 7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior.
if (
  mes === 1 ||
  mes === 3 ||
  mes === 5 ||
  mes === 7 ||
  mes === 8 ||
  mes === 10 ||
  mes === 12
) {
  console.log('este mes tiene 31 dias');
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
  console.log('este mes tiene 30 días');
} else {
  console.log('Febrero tiene 28 o 29 dias');
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
let saludo = 'a';
let idioma;
switch (saludo) {
  case 'español':
    idioma = 'hola';
    break;
  case 'ingles':
    idioma = 'hello';
    break;
  case 'frances':
    idioma = 'bonjour';
    break;
  case 'japones':
    idioma = 'Konnichiwa';
    break;
  case 'chino':
    idioma = 'Nǐ hǎo';
    break;
  case 'portugues':
    idioma = 'olá';
    break;
  case 'coreano':
    idioma = 'annyeonghaseyo';
  default:
    idioma = 'Idioma no reconocido';
    break;
}
console.log(idioma);

// 9. Usa un switch para hacer de nuevo el ejercicio 6.
let estacion;
let mesNum = 9;
switch (mesNum) {
  case 1:
    estacion = 'verano';
    break;
  case 2:
    estacion = 'verano';
    break;
  case 12:
    estacion = 'verano';
    break;
  case 3:
    estacion = 'otoño';
    break;
  case 4:
    estacion = 'otoño';
    break;
  case 5:
    estacion = 'otoño';
    break;
  case 6:
    estacion = 'invierno';
    break;
  case 7:
    estacion = 'invierno';
    break;
  case 8:
    estacion = 'invierno';
    break;
  case 9:
    estacion = 'primavera';
    break;
  case 10:
    estacion = 'primavera';
    break;
  case 11:
    estacion = 'primavera';
}
console.log(estacion);

// 10. Usa un switch para hacer de nuevo el ejercicio 7.

let numerosMes;
switch (mesNum) {
  case 1:
    numerosMes = ' tiene 31 dias';
  case 2:
    numerosMes = 'tiene 28 o 29 dias';
    break;
  case 12:
    numerosMes = 'tiene 31 dias';
    break;
  case 3:
    numerosMes = 'tiene 31 dias';
    break;
  case 4:
    numerosMes = 'tiene 30 dias';
    break;
  case 5:
    numerosMes = 'tiene 31 dias';
    break;
  case 6:
    numerosMes = 'tiene 30 dias';
    break;
  case 7:
    numerosMes = 'tiene 31 dias';
    break;
  case 8:
    numerosMes = 'tiene 31 dias';
    break;
  case 9:
    numerosMes = 'tiene 30 dias';
    break;
  case 10:
    numerosMes = 'tiene 31 dias';
    break;
  case 11:
    numerosMes = 'tiene 30 dias';
}
console.log(numerosMes);
