let tareas = [];

function mostrarMenu (){
    return parseInt(
        prompt(
            "Opciones disponibles: \n" +
            "1. Agreagr tarea \n" +
            "2. Ver todas las tareas \n" +
            "3. Marcar tarea como completada \n" +
            "4. Salir \n"+
            "Elige una opción"
        )
    );
}

function agregarTarea() {
    let nombre = prompt("Introduce el nombre de la tarea");
    if (nombre) {
        let tarea = {
            nombre: nombre,
            completado: false
        };
        tareas.push(tarea);
        console.log(`La tarea "${nombre}" ha sido agregada con éxito.`);
    } else {
        alert("El nombre de la tarea no puede estar vacío");
    }
}

function marcarTarea() {
    let numero = parseInt(prompt("Introduce el número de la tarea para marcar como completada"));

    if (numero > 0 && numero <= tareas.length) {
        tareas[numero - 1].completado = true;
        alert(`La tarea: "${tareas[numero - 1].nombre}" ha sido marcada como completada.`);
    } else {
        alert("Número de tarea no válido");
    }
}

function iniciarPrograma() {
    let seguir = true;
    while (seguir) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTarea();
                break;
            case 4:
                seguir = false;  // Ahora sí saldrá del bucle
                break;
            default:
                alert("Opción no válida");
                break;
        }
    }
    alert("Programa terminado");
}

iniciarPrograma();
//Iniciar programa
