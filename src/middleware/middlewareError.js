import { EErrors } from "../handleErrors/handleErrors.js";

export default (err, req, res, next) => {
    switch(err.code){
        case EErrors.INVALID_TYPES:
            res.json({status: "Error en propiedades recibidas", error: err.name})
            break;
        case EErrors.DB:
            res.json({status: "Error en la base de datos", error: err.name})
            break;
        case EErrors.ROUTE:
            res.json({status: "Error en la ruta", error: err.name})
            break;
        default:
            res.json({status: "Error genérico", error: err.name})
            break;
    }

}