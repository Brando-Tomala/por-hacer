const colors = require('colors');
const argv = require('./config/yargas').argv;
const { crear, getListado, actualizar, eliminar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        console.log("Muestra todas las tareas por hacer");
        let listado = getListado(argv.completado);
        if (listado.length !== 0) {
            for (let tarea of listado) {
                console.log("============Tarea===========".green);
                console.log(`Descripcion: ${tarea.descripcion}`);
                console.log(`Estado: ${tarea.completado}`);
                console.log("=============================".green);
            }
        } else {
            console.log("No hay tareas agregadas");
        }
        break;
    case "actualizar":
        console.log("Actualiza tareas");
        let resp = actualizar(argv.descripcion);
        console.log(resp);
        break;
    case "borrar":
        console.log("Borra tareas");
        let respu = eliminar(argv.descripcion);
        console.log(respu);
        break;

    default:
        console.log("Opcion incorrecta");
        break;
}