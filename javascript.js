//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.*

const $calculador = document.querySelector('#boton-calcular');
const $totalCalculos = document.querySelector('strong');

$calculador.onclick = function() {
    const cantidadHoras = document.querySelectorAll('.horas');
    const cantidadMinutos = document.querySelectorAll('.minutos');
    const cantidadSegundos = document.querySelectorAll('.segundos');

    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;

    for (let i = 0; i < cantidadHoras.length; i++) {
        totalHoras += Number(cantidadHoras[i].value); 
    }
    for (let i = 0; i < cantidadMinutos.length; i++) {
        totalMinutos += Number(cantidadMinutos[i].value);
            if ((totalMinutos / 60) >= 1) {
                totalHoras++;
                totalMinutos = totalMinutos % 60;
            }
        }

    for (let i = 0; i < cantidadSegundos.length; i++) {
        totalSegundos += Number(cantidadSegundos[i].value);
            if ((totalSegundos / 60) >= 1) {
                totalMinutos++;
                totalSegundos = totalSegundos % 60;
            }
        }

    console.log(totalHoras);
    console.log(totalMinutos);
    console.log(totalSegundos);
    
    $totalCalculos.textContent = `Los vídeos en su totalidad duran ${totalHoras} horas, ${totalMinutos} minutos y ${totalSegundos} segundos.`

    return false;
}
