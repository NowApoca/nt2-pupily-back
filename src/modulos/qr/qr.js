import QRCode from "qrcode";

export default class ModuloQR {
    constructor() {}

    async generarCodigoQR(data, formato) {
        switch (formato) {
            case "data_url":
                return await QRCode.toDataURL(data);

            case "string":
                return await QRCode.toString(data);

            default:
                throw "El formato especificado no existe.";
        }
    }
};