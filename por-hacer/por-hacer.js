const fs = require('fs');

let porHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(porHacer);
    const datosPorHacer = new Uint8Array(Buffer.from(data));
    fs.writeFile('./db/data.json', datosPorHacer, (err) => {
        if (err) throw new Error('No se pudo guardar en archivo: data.json');
        console.log('Datos guardados correctamente');
    });
}

const leerDB = () => {
    try {
        porHacer = require('../db/data.json');
    } catch (error) {
        porHacer = [];
    }
}

let crear = (descripcion) => {

    leerDB();

    let tarea = {
        descripcion,
        completado: false
    };

    porHacer.push(tarea);
    guardarDB();
    return tarea;
}

const getListado = (completado) => {
    console.log(completado);
    leerDB();
    let index = porHacer.filter(tarea => tarea.completado.toString() === completado);
    return index;
}


const actualizar = (descripcion, completado = true) => {
    leerDB();
    if (porHacer.length === 0) {
        return "No hay datos por actualizar";
    } else {
        let index = porHacer.findIndex(tarea => tarea.descripcion === descripcion);
        if (index >= 0) {
            porHacer[index].completado = completado;
            guardarDB();
            return "Actualizacion exitosa";
        } else {
            return "No existe objeto dentro del arreglo";
        }


    }
}


const eliminar = (descripcion) => {
    leerDB();
    if (porHacer.length === 0) {
        return "No hay datos por eliminar";
    } else {
        let index = porHacer.filter(tarea => tarea.descripcion !== descripcion);
        if (index.length !== porHacer.length) {
            porHacer = index;
            guardarDB();
            return "Eliminacion exitosa";
        } else {
            return "No existe tarea";
        }

    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}