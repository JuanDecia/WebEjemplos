class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor (tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++ Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `Raton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}.`;
    }
}

class Teclado extends DispositivoEntrada {

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++ Teclado.contadorTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `Teclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}.`;
    }
}

class Monitor {

    static contadorMonitor = 0;

    constructor(marca, tamaño) {
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++ Monitor.contadorMonitor;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get tamaño() {
        return this._tamaño;
    }

    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }

    toString() {
        return `Monitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}.`;
    }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre,  monitor, raton, teclado) {
        this._idComputadora = ++ Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    toString() {
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++ Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let computadorasOrden = '';

        for (let computadora of this._computadoras) {
            computadorasOrden += ` \n${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let ratonLogitech = new Raton('USB', 'Logitech');
let ratonRedDragon = new Raton('USB', 'RedDragon');
console.log(ratonLogitech.toString());
console.log("");

let tecladoDragon = new Teclado('USB', 'RedDragon');
let tecladoNoga = new Teclado('USB', 'Noga');
console.log(tecladoDragon.toString());
console.log("");

let monitorLg = new Monitor('Lg', 18);
let monitorPhilips = new Monitor('Monitor', 32);
console.log(monitorLg.toString());
console.log("");

let computadoraUno = new Computadora('Ryzen', monitorLg, ratonLogitech, tecladoDragon);
console.log(`${computadoraUno}`);
console.log("");

let computadoraDos = new Computadora('AMD', ratonRedDragon, tecladoNoga, monitorPhilips);

let ordenUno = new Orden();
ordenUno.agregarComputadora(computadoraUno);
ordenUno.agregarComputadora(computadoraDos);
ordenUno.mostrarOrden();