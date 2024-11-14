import { Router } from "express"
import { generatePet, generateUser } from "../utils/utils.js"
import HandleError, { EErrors } from "../handleErrors/handleErrors.js"
import { generateUserErrorInfo, mocksParamsErrorInfo } from "../handleErrors/mocksErrors.js"
import middlewareError from "../middleware/middlewareError.js"

const router = Router()

const pets = []
router.get('/mockingpets', (req, res) => {
    if(pets.length == 0) return res.status(400).json({message:'No pets found'})
    res.status(200).json({payload: pets})
})

router.get('/mockingpets/:num', (req, res) => {
    const { num } = req.params
    if(num <= 0){
        HandleError.createError({
            name:'Error en parámetro recibido',
            cause: mocksParamsErrorInfo(num),
            message: 'Número para crear mascotas inválido',
            code: EErrors.INVALID_TYPES
        })
    } 
    for (let i = 0; i < num; i++){
        pets.push(generatePet())
    }
    res.status(200).json({payload:pets})
})

router.get('/mockingusers/:num', (req, res) => {
    const { num } = req.params
    const users = []
    if(num <= 0) {
        HandleError.createError({
            name:'Error en parámetro recibido',
            cause: mocksParamsErrorInfo(num),
            message: 'Número para crear mascotas inválido',
            code: EErrors.INVALID_TYPES
        })
    } 
    for (let i = 0; i < num; i++){
        users.push(generateUser())
    }
    res.status(200).json({payload:users})
})

router.use(middlewareError)

export default router