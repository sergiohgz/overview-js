const coche = {
    marca: 'Volkswagen',
    modelo: 'Golf',
    anno: 2020,
    potencia: 150,
    nivelBateria: 20, // X%
    estaArrancado: false,
    arrancarMotor() {
        if (this.nivelBateria > 10) {
            console.log('Motor arrancado');
            this.estaArrancado = true;
        } else {
            console.error('No tengo suficiente bateria');
        }
    },
    circular() {
        if (this.estaArrancado) {
            console.log('Circulando');
        }
    },
    pararMotor() {
        this.estaArrancado = false;
        console.log('Motor parado');
    }
};

coche.arrancarMotor();
coche.circular();
coche.pararMotor();
coche.circular();
