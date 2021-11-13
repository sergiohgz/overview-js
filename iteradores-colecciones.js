const arrayDeLetras = ['a', 'b', 'c', 'd', 'e'];

console.log('1. Recorrer el array con for normal');
for(let posicion = 0; posicion < arrayDeLetras.length; posicion++) {
    const elemento = arrayDeLetras[posicion];
    console.log(elemento);
}

console.log('2. Recorrer el array con for-of');
for(let elemento of arrayDeLetras) {
    console.log(elemento);
}

console.log('3. Recorrer el array con for-each');
arrayDeLetras.forEach(function(elemento) {
    console.log(elemento);
});

const miObjeto = {
    nombre: 'Pepe',
    apellido: 'Jimenez',
    edad: 35,
};
console.log('Objetos -> 1. Accediendo mediante un array de claves')
const clavesDeMiObjeto = Object.keys(miObjeto); // ['nombre', 'apellido', 'edad']
for(let clave of clavesDeMiObjeto) {
    console.log('Atributo/Clave/Propiedad:', clave, 'Valor de la clave:', miObjeto[clave])
}

console.log('Objetos -> 2. Accediendo con un for-in')
for(let clave in miObjeto) {
    console.log('Atributo/Clave/Propiedad:', clave, 'Valor de la clave:', miObjeto[clave])
}
