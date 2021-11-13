let cervezas = undefined;

// fetch('https://api.punkapi.com/v2/beers?page=1&per_page=2')
//     .then((response) => response.json())
//     .then((beers) => {
//         cervezas = beers
//         console.log('Cervezas en el then', cervezas); //1
//     })
//     .catch((error) => console.error('Algo ha pasado', error));

// Funcion async con try-catch
// const funcionQuePideCervezas = async function() {
//     try {
//         console.log('Ejecutando funcion asincrona en hilo paralelo')
//         const respuesta = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=2')
//         if (!respuesta.ok) {
//             throw new Error (respuesta);
//         }
//         const json = await respuesta.json();
//         cervezas = json;
//         console.log('Cervezas en el then', cervezas); //1
//     } catch(error) {
//         console.error('Algo ha pasado', error)
//     }
// }
// async function funcionQuePideCervezas() {
//     try {
//         console.log('Ejecutando funcion asincrona en hilo paralelo')
//         const respuesta = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=2')
//         if (!respuesta.ok) {
//             throw new Error (respuesta);
//         }
//         const json = await respuesta.json();
//         cervezas = json;
//         console.log('Cervezas en el then', cervezas); //1
//     } catch(error) {
//         console.error('Algo ha pasado', error)
//     }
// }
const funcionQuePideCervezas = async () => {
    try {
        console.log('Ejecutando funcion asincrona en hilo paralelo')
        const respuesta = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=2')
        if (!respuesta.ok) {
            throw new Error (respuesta);
        }
        const json = await respuesta.json();
        cervezas = json;
        console.log('Cervezas en el then', cervezas); //1
    } catch(error) {
        console.error('Algo ha pasado', error)
    }
}

// Funcion async con mix de then-catch
// const funcionQuePideCervezas = async function() {
//     console.log('Ejecutando funcion asincrona en hilo paralelo')
//     const json = await fetch('https://api.punkapi.com/v2/be?page=1&per_page=2')
//         .then((respuesta => respuesta.json()))
//         .catch((error) => console.error('Algo ha pasado', error));
//     cervezas = json;
//     console.log('Cervezas en el then', cervezas); //1
// }

// Funcion async con try-catch y then
// const funcionQuePideCervezas = async function() {
//     try {
//         console.log('Ejecutando funcion asincrona en hilo paralelo')
//         const json = await fetch('https://api.punkapi.com/v2/be?page=1&per_page=2').then((respuesta => respuesta.json()))
//         cervezas = json;
//         console.log('Cervezas en el then', cervezas); //1
//     } catch(error) {
//         console.error('Algo ha pasado', error)
//     }
// }

funcionQuePideCervezas(); // abrimos hilo paralelo para ejecutar codigo asincrono
console.log('Cervezas', cervezas) //2
