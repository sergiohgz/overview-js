const boton1 = document.getElementById('btn-1');
boton1.textContent = 'Mostrar alert';

boton1.addEventListener('click', function() {
    alert('Soy el alert que ha lanzado el boton');
});

boton1.addEventListener('keydown', function(evento) {
    if(evento.key === 'Enter') {
        evento.stopPropagation();
        evento.preventDefault();
        console.log('No se puede lanzar el alert con un Enter');
    }
})

function mostrarCuandoElMouseSePongaEncimaDelBoton() {
    const div = document.createElement('div');
    div.textContent = 'El mouse está encima del boton';
    boton1.parentElement.appendChild(div);
}

boton1.addEventListener('mouseenter', mostrarCuandoElMouseSePongaEncimaDelBoton);

const boton2 = document.getElementById('btn-2');
boton2.addEventListener('click', function() {
    boton1.removeEventListener('mouseenter', mostrarCuandoElMouseSePongaEncimaDelBoton);
});

function clickEnBoton() {
    console.log('Click en boton')
}
