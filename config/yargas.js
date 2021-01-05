let opts = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

let optsActualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}

let optC = {
    completado: {
        alias: 'c',
        demand: true
    }
}


const argv = require('yargs').command('crear', 'Crea tareas', opts)
    .command('listar', 'Lista tareas', optC)
    .command('actualizar', 'Actualiza tarea', optsActualizar)
    .command('borrar', 'Borra tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}