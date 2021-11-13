var variable1;
let variable2;
const variableConstante = '';

variable1 = 'Texto'
variable2 = 2;
// variable2 = 'Esto es un texto que sobrescribe el valor anterior'

typeof variable1 === 'string'
typeof variable2 === 'number'

let variableString = 'Texto'
let variableNumber = 23
let variableBoolean = false;
let variableObjeto = {};
let variableArray = [];
let variableNula = null;
let variableNoDefinida = undefined;


console.log(variableString, typeof variableString)
console.log(variableNumber, typeof variableNumber)
console.log(variableBoolean, typeof variableBoolean)
console.log(variableObjeto, typeof variableObjeto)
console.log(variableArray, variableArray instanceof Array, Array.isArray(variableArray))
console.log(variableNula, typeof variableNula)
console.log(variableNoDefinida, typeof variableNoDefinida)

let numeroA = 1;
let numeroB = 2;
numeroA += numeroB // numeroA = numeroA + numeroB

let numeroIncrementar = 1
numeroIncrementar++
++numeroIncrementar

let numeroA = 1;
let numeroB = 2;
let stringNumeroA = '1';
let stringNumeroB = '2';
numeroA < numeroB // true
numeroA > numeroB // false
numeroA <= numeroB
numeroA >= numeroB
numeroA == numeroA // 1 == 1 // true
numeroA == stringNumeroA // 1 == '1' // true
numeroA === numeroA // 1 === 1 // true
numeroA === stringNumeroA // 1 === '1' // false
// == !=
// === !==

let variableObjeto = {
    nombre: 'Pepe',
    apellido: 'Jimenez',
    edad: 35,
    profesion: 'albañil'
}
variableObjeto.nombre === 'Pepe' // true
variableObjeto['nombre'] === 'Pepe' // true
variableObjeto.altura = '175cm'
delete variableObjeto.edad
let objetoVacio = {}

let miArray = ['String 1', 'String 2', 'String 3', 4, {}, 'String 6']
let arrayHomogeneo = [1,2,3,4,77,54231,4565]
// let arrayHomogeneo2 = ['', 'aaa', 'ccc', 'zz']
let arrayHomogeneo3 = [{nombre: 'Pepe', apellido: 'Jimenez', edad: 24}, {apellido: 'Sanchez', edad: 35}]

let arrayHomogeneo2 = ['', 'aaa', 'ccc', 'zz']
arrayHomogeneo2.splice(2, 0, 'bb', 'kk') // ['', 'aaa', 'bb', 'kk', 'ccc', 'zz']


// arrayHomogeneo2.splice(1, 1, 'bb', 'a') // ['', 'bb', 'a', 'ccc', 'zz']
