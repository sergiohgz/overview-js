const miArray = [
    { nombre: 'Pepe', edad: 35 },
    { nombre: 'Luis', edad: 32 },
    { nombre: 'Juan', edad: 28 },
    { nombre: 'Maria', edad: 40 },
    { nombre: 'Jose', edad: 42 },
]

// const arrayDeEdades = []
// for(let persona of miArray) {
//     arrayDeEdades.push(persona.edad);
// }
// function anadirEdadDePersona(persona) {
    // if (persona.edad >= 35) {
    //     arrayDeEdades.push(persona.edad);
    // }
// }
// miArray.forEach(anadirEdadDePersona);
const arrayDeEdades = miArray.map((persona) => {
    return persona.edad >= 35 ? persona.edad : undefined
}) // [35, undefined, undefined, 40, 42]
.filter((edad) => {
    return !!edad
}) // [35, 40, 42]
.reduce((acumulador, edad) => { return acumulador + edad }, 0);
// primera vuelta -> acumulador = 0, edad = 35 -> return 35
// segunda vuelta -> acumulador = 35, edad = 40 -> return 75
// tercera vuelta -> acumulador = 75, edad = 42 -> return 117
console.log(arrayDeEdades);
