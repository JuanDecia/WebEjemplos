const fechaActual = new Date();

const contenedorFecha = document.getElementsByClassName("cont-fecha");
const contenedorEstacion = document.getElementsByClassName("cont-estacion");

let [day, mes, year] = [fechaActual.getDay(), fechaActual.getMonth(), fechaActual.getFullYear()];
let estacion;

if ((mes == 11 && day >= 21) || mes == 0 || mes == 1 || (mes == 2 && day < 21)) {
    estacion = 'Verano';
}
else if ((mes == 2 && day >= 21) || mes == 3 || mes == 4 || (mes == 5 && day < 21)) {
    estacion = 'Otoño';
}
else if ((mes == 5 && day >= 21) || mes == 6 || mes == 7 || (mes == 8 && day < 21)) {
    estacion = 'Invierno';
}
else if ((mes == 8 && day >= 21) || mes == 9 || mes == 10 || (mes == 11 & day < 21)){
    estacion = 'Primavera';
}

// RESULTADO EN DOM
contenedorFecha[0].innerHTML += `La fecha de hoy es: ${fechaActual}.`
contenedorEstacion[0].innerHTML += `La estación correspondiente es: ${estacion}.`

// RESULTADO EN CONSOLA
console.log(fechaActual + "\n\n");
console.log(`Estamos en: ${estacion}.`);