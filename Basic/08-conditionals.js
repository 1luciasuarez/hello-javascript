//if, else if, else

//if (si)
let age = 37;
if (age == 37) {
  console.log('la edad es 37');
}

//else (si no)
if (age == 37) {
  console.log('La edad es 37');
} else {
  console.log('la edad no es 37');
}

//else if (si no, si)

if (age == 37) {
  console.log('La edad es 37');
} else if (age < 18) {
  console.log('Es menor de edad');
} else {
  console.log('la edad no es 37, ni es menor de edad');
}

//operador ternario
const message = age == 37 ? 'la edad es 37' : 'la edad no es 37';
console.log(message);

//switch
let day = 1;
let dayname;
switch (day) {
  case 0:
    dayname = 'Lunes';
    break;
  case 1:
    dayname = 'Martes';
    break;
  case 2:
    dayname = 'Miercoles';
    break;
  case 3:
    dayname = 'Jueves';
    break;
  case 4:
    dayname = 'Viernes';
    break;
  case 5:
    dayname = 'Sabado';
    break;
  case 6:
    dayname = 'Domingo';
    break;
  default:
    dayname = 'Numero de dia incorrecto';
}
console.log(dayname);
