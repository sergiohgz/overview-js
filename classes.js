class Coche {
    estaArrancado = false;
    nivelBateria = 100; // X%

    constructor(marca, modelo, anno, potencia) {
        this.marca = marca;
        this.modelo = modelo;
        this.anno = anno;
        this.potencia = potencia;
    }

    arrancarMotor() {
        if(!this.estaArrancado && this.nivelBateria > 10) {
            console.log(`${this.modelo} arrancado`);
            this.nivelBateria -= 20;
            this.estaArrancado = true;
        }
    }

    circular() {
        if(this.estaArrancado && this.nivelBateria > 0) {
            this.nivelBateria -= 10;
            console.log(`El ${this.modelo} está circulando`)
        }
    }

    pararMotor() {
        if(this.estaArrancado) {
            this.estaArrancado = false;
            console.log(`${this.modelo} parado`)
        }
    }
}

const golf = new Coche('Volkswagen', 'Golf', 2020, 150);
const polo = new Coche('Volkswagen', 'Polo', 2015, 100);
const focus = new Coche('Ford', 'Focus', 2012, 115);
