const { registrar, leer } = require('./operaciones');

const operacion = process.argv[2];

switch (operacion) {
    case 'registrar':
        registrar(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7]);
        break;
    case 'leer':
        leer();
        break;
    default:
        console.log('Operación no reconocida.');
}