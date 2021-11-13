let nombre = 'Mercedes';

if (nombre === 'Pepe') {
    console.log('Hola, soy Pepe');
} else if (nombre === 'Maria') {
    console.log('Hola, soy Maria')
} else if (nombre === 'Juan') {
    console.log('Hola, soy Juan')
} else {
    console.log('Soy nuev@')
}

nombre === 'Pepe' ?
    console.log('Hola, soy Pepe') :
    nombre === 'Maria' ?
        console.log('Hola, soy Maria') :
        nombre === 'Juan' ?
            console.log('Hola, soy Juan') :
            console.log('Soy nuev@')

switch(nombre) {
    case 'Pepe':
        console.log('Hola, soy Pepe');
        break;
    case 'Maria':
        console.log('Hola, soy Maria');
        break;
    case 'Juan':
        console.log('Hola, soy Juan');
        break;
    default:
        console.log('Soy nuev@')
}

// switch(nombre) {
//     case 'Mercedes':
//         console.log('mmmm....')
//     case 'Alfonso':
//         break;
//     case 'Celia':
//         console.log(`Hola, soy ${nombre}, un compañero del bootcamp`);
//         break;
//     default:
//         console.log(`Soy ${nombre}, soy nuev@`)
// }

console.log('Fin de la conversacion')
