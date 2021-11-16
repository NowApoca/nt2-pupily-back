import ModuloQR from "../../src/modulos/qr/qr.js";

const qr = ModuloQR();
console.log('generando un qr de google');
qr.generarCodigoQR('https://google.com', 'string')
    .then(console.log)
    .catch(console.log);

qr.generarCodigoQR('https://google.com', 'data_url')
    .then(console.log)
    .catch(console.log);