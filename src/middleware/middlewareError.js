import { EErrors, codes } from "../handleErrors/handleErrors.js";

export default (err, req, res, next) => {
    switch(err.type){
        case EErrors.INVALID_TYPES:
            res.status(err.code).json({status: codes[err.code], error: err.name, message: 'Error en el tipo de dato'})
            break;
        case EErrors.DB:
            res.status(err.code).json({status: codes[err.code], error: err.name, message: 'Error en la Base de Datos'})
            break;
        case EErrors.ROUTE:
            res.status(err.code).json({status: codes[err.code], error: err.name, message: 'Error en la ruta'})
            break;
        default:
            res.status(404).json({status: codes[404], error: err.name, message: 'Error genérico'})
            break;
    }

}