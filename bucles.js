// hacer algo hasta que la condición sea falsa
// while(condicion) {
//     //hacer algo
//     // modificaremos algo respecto a la condición para parar en algun momento
// }

// let contador = 3;
// while(contador > 0) {
//     console.log(contador)
//     contador--;
// }
// if (contador === 0) {
//     console.log('BOOOOOM!!!')
// }

///// DO-WHILE
// let contrasena = '1234';
// let contadorDeIntentos = 0;
// do {
//     contrasena = prompt('Introduzca la contraseña del banco');
//     contadorDeIntentos++;
// } while(contrasena !== '1234' && contadorDeIntentos < 3)
// // while(contrasena !== '1234' && contadorDeIntentos < 3) {
// //     contrasena = prompt('Introduzca la contraseña del banco');
// //     contadorDeIntentos++;
// // }


// if (contadorDeIntentos === 3) {
//     console.log('CUENTA BLOQUEADA');
// }

// FOR
// for(ínicializacion;condicion;modificadorDeCondicion){
//     hacer algo
// }
let contador;
for(contador = 3; contador > 0; contador--) {
    console.log(contador)
}
if(contador === 0) {
    console.log('BOOOOOOM!!!')
}
