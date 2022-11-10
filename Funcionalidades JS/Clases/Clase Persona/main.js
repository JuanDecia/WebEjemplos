let contResultado = document.getElementsByClassName("cont-resultado");

class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre (nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido (apellido) {
        this._apellido = apellido;
    }

    get edad() {
        return this._edad;
    }

    set edad (edad) {
        this._edad = edad;
    }

    toString() {
        return `Id de la persona: ${this._idPersona}, ${this._nombre} ${this._apellido}, ${this._edad}.`;
    }
}

class Empleado extends Persona {
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad); 
        this._idEmpleado = ++ Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    toString() {
        return super.toString() + ' |' +  ' ' + 'El id de este empleado es: ' +  this._idEmpleado + ' ' + "Su sueldo es: " + this._sueldo;
    }
}

class Cliente extends Persona {
    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad)
        this._idCliente = ++ Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    toString() {
        return `${super.toString()} | El id de este cliente es: ${this._idCliente}, se registró: ${this._fechaRegistro}.`;
    }
}

let personaUno = new Persona('Juan', 'Decia', 28);
contResultado[0].innerHTML += personaUno.toString();
console.log(personaUno.toString());

let empleadoUno = new Empleado('Joan', 'Decia', 18, 108);
contResultado[1].innerHTML += empleadoUno.toString();
console.log(empleadoUno.toString());

let clienteUno = new Cliente('Lucas', 'Vega', 15, new Date());
contResultado[2].innerHTML += clienteUno.toString();
console.log(clienteUno.toString());


