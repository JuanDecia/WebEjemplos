/*
    El Arquitecto de Software nos ha comunicado la necesidad de otras funciones, que operan sobre 
    estructuras de datos de arreglos, para estimar ciertos valores necesarios en la construcción de 
    nuestra aplicación. Es tu turno de implementar las funciones de acuerdo a las siguientes 
    especificaciones.

    1- La función mínimo que recibe un arreglo de montos y devuelve el monto mínimo.
    2- La función máximo que recibe un arreglo de montos y devuelve el monto máximo.
    3- La función promedio que recibe el mínimo, máximo y el arreglo de montos y devuelve el promedio 
    sin considerar ni el mínimo ni el máximo.
*/

let contResultado = document.getElementsByClassName("cont-resultado");

let montos = [5,15,22,25,30,52,5,1];

function valorMinimo(donaciones) {
    let min = 1000;

    for (monto of donaciones) { // Buscamos cada indice del array //
        if (monto < min) {  // Si el numero es menor que mil dentro del array, lo tomamos //
            min = monto; // Se queda el valor del minimo en el array //
        }
    }
    return min;
}

function valorMaximo(donaciones) {
    let max = 0;

    for (monto of donaciones) {
        if (monto > max) {
            max = monto;
        }
    }
    return max;
}

function valorPromedio(min, max, donaciones) {
    let sum = 0;
    let cantidad = 0;

    for (monto of donaciones) {
        if (monto > min && monto < max) {
            sum += monto;
            cantidad++;
        }
    }
    return sum/cantidad
}

let min = valorMinimo(montos);
let max = valorMaximo(montos);

console.log(min)
contResultado[0].innerHTML += `El valor mínimo es: ${valorMinimo(montos)}.`;

console.log(max)
contResultado[1].innerHTML += `El valor máximo es: ${valorMaximo(montos)}.`;

console.log(valorPromedio(min, max, montos));
contResultado[2].innerHTML += `El promedio es: ${valorPromedio(min, max, montos)}.`;