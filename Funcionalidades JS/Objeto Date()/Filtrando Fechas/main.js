/* Tu reto es construir una función que reciba un arreglo de eventos y una fechaReferencia y devuelva un arreglo de dos posiciones.
 La primera posición son los eventos futuros ordenados desde el que ocurrirá más pronto hasta el que ocurra en el futuro. 
 La segunda posición son los eventos pasados desde el más reciente al más antiguo. La fechaReferencia es quien determina cuál es 
 el futuro y cuál es el pasado, antes de esa fecha todos son pasados y luego de ella todos son futuros.
*/

var eventos = [
    {
        nombre: "e1",
        fecha: new Date(2018, 3, 20)
    },
    {
        nombre: "e2",
        fecha: new Date(2018, 2, 20)
    },
    {
        nombre: "e3",
        fecha: new Date(2018, 3, 10)
    },
    {
        nombre: "e4",
        fecha: new Date(2018, 5, 20)
    },
    {
        nombre: "e5",
        fecha: new Date(2018, 6, 20)
    },
    {
        nombre: "e6",
        fecha: new Date(2018, 0, 20)
    },
    {
        nombre: "e7",
        fecha: new Date(2018, 8, 20)
    },
]

/* Filtramos los eventos en futuros y pasados a la fecha de referencia */
function organizarEventos(eventos, fechaReferencia) {

    let futuros = eventos.filter(x => x.fecha.getTime() >
        fechaReferencia.getTime());

    let pasados = eventos.filter(x => x.fecha.getTime() <=
        fechaReferencia.getTime());

    /* Ordenamos los arreglos "futuros" con la funcion sort() */
    futuros.sort((a, b) => {

        if (a.fecha.getTime() > b.fecha.getTime()) {
            return 1;
        }

        if (a.getTime() < b.fecha.getTime()) {
            return -1;
        }

        return 0;
    })

    /* Realizamos el mismo orden con "pasados" */
    pasados.sort((a, b) => {

        if (a.fecha.getTime() > b.fecha.getTime()) {
            return -1;
        }

        if (a.fecha.getTime() < b.fecha.getTime()) {
            return 1;
        }

        return 0;
    })

    /* Se retornan los dos arreglos */
    return (futuros, pasados);

}

let resultado = organizarEventos(eventos, new Date(2018, 3, 21));
console.log(resultado[0]);
console.log(resultado[1]);