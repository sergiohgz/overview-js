// const segundoParrafo = document.getElementById('parrafo2');
const segundoParrafo = document.querySelector('#parrafo1');
segundoParrafo.textContent = 'Ahora he modificado el segundo parrafo desde JS'

const todosParrafosRojos = document.querySelectorAll('.red');
console.log('Todos Parrafos Rojos', todosParrafosRojos);
for(let parrafo of todosParrafosRojos) {
    console.log('Parrafo', parrafo);
    parrafo.className = 'green';
}

// const quintoParrafo = document.querySelectorAll('p')[4];
// const quintoParrafo = document.querySelectorAll('section > p')[4];
const quintoParrafo = document
    .getElementsByTagName('section')[0]
    .querySelectorAll('p')[4];
quintoParrafo.textContent = 'Modificado 5o'

const section = document.getElementById('seccion');
const nuevoDiv = document.createElement('div');
nuevoDiv.setAttribute('class', 'blue');
nuevoDiv.innerHTML = '<span class="background-red">Texto añadido</span>';
section.appendChild(nuevoDiv);
const nuevoDiv2 = document.createElement('div');
nuevoDiv2.textContent = 'Voy antes del div de texto azul y fondo rojo';
section.insertBefore(nuevoDiv2, nuevoDiv);
console.log('Atributos de nuevoDiv', nuevoDiv.attributes)
console.log('HTML del section', section.innerHTML)
