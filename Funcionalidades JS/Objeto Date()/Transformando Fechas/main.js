/*
    La mision de este proyecto es completar una funcion para mostrar la fecha de cada evento pasado en una forma que sea mas legible por una persona.
*/

function fechaParaHumanos(fecha, fechaReferencia) {
    let t1 = fecha.getTime() / 1000; // Segundos
    let t2 = fechaReferencia.getTime() / 1000;

    let diferencia;
        diferencia = Math.round(t2-t1);

            if (diferencia < 1) {
                return "hace 1 segundo";
            }

            if (diferencia < 60) {
                return `hace ${diferencia} segundos`
            }

            diferencia = Math.round(diferencia/60);

            if (diferencia < 1) {
                return "hace un minuto"
            }

            if (diferencia < 60) {
                return `hace ${diferencia} segundos`
            }

            diferencia = Math.round(diferencia/60);

            if (diferencia <= 1) {
                return "hace 1 hora"
            }

            if (diferencia < 24) {
                return `hace ${diferencia} horas`
            }

            diferencia = Math.round(diferencia/24);

            return `hace ${diferencia} dias`
}

console.log(fechaParaHumanos(new Date(2018,6,1,9,1,1,1000), new Date(2018,6,1,10,1,1,100)));

