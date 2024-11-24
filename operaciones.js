const fs = require('fs');
const path = './citas.json';

function registrar(nombre, edad, tipo, color, enfermedad) {
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };
    fs.readFile(path, (err, data) => {
        if (err) throw err;
        const citas = JSON.parse(data);
        citas.push(nuevaCita);
        fs.writeFile(path, JSON.stringify(citas, null, 2), (err) => {
            if (err) throw err;
            console.log('Cita registrada con éxito.');
        });
    });
}

function leer() {
    fs.readFile(path, (err, data) => {
        if (err) throw err;
        const citas = JSON.parse(data);
        console.log(citas);
    });
}

module.exports = { registrar, leer };