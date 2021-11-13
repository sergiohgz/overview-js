class VehiculoMotor {
    estaArrancado = false;
    nivelBateria = 100;

    constructor(
        marca,
        modelo,
        anno,
        potencia,
        numeroRuedas,
        consumoBateriaArranque = 20,
        consumoBateriaCirculacion = 15
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.anno = anno;
        this.potencia = potencia;
        this.numeroRuedas = numeroRuedas;
        this.consumoBateriaArranque = consumoBateriaArranque;
        this.consumoBateriaCirculacion = consumoBateriaCirculacion;
    }

    arrancarMotor() {
        if(!this.estaArrancado && this.nivelBateria > 10) {
            console.log(`${this.modelo} arrancado`);
            this.nivelBateria -= this.consumoBateriaArranque;
            this.estaArrancado = true;
        }
    }

    circular(otrasCondiciones = true) {
        if(this.estaArrancado && this.nivelBateria > 0 && otrasCondiciones) {
            this.nivelBateria -= this.consumoBateriaCirculacion;
            console.log(`El ${this.modelo} está circulando`)
            return true;
        } else {
            console.info('Arranque motor primero')
            return false;
        }
    }

    pararMotor() {
        if(this.estaArrancado) {
            this.estaArrancado = false;
            console.log(`${this.modelo} parado`)
        }
    }
}

class Moto extends VehiculoMotor {
    contadorParaPinchar = 3;
    ruedaPinchada = false;
    constructor(marca, modelo, anno, potencia, numeroRuedas = 2) {
        super(marca, modelo, anno, potencia, numeroRuedas, 30, 20);
    }

    pincharRueda() {
        if (this.contadorParaPinchar === 1) {
            this.ruedaPinchada = true;
        }
        this.contadorParaPinchar--;
    }

    circular() {
        if (this.ruedaPinchada) {
            console.error('Hemos pinchado y no podemos movernos')
        } else {
            const haCirculado = super.circular();
            if (haCirculado) {
                this.pincharRueda();
            }
        }
    }
}

class Coche extends VehiculoMotor {
    constructor(marca, modelo, anno, potencia) {
        super(marca, modelo, anno, potencia, 4);
    }
}

const golf = new Coche('Volkswagen', 'Golf', 2020, 150);
const focus = new Coche('Ford', 'Focus', 2012, 115);
const ninja = new Moto('Kawasaki', 'Ninja', 2021, 125);
const xTown = new Moto('Kymco', 'XTown', 2016, 250);
const metropolis = new Moto('Peugeout', 'Metropolis', 2019, 400, 3);
