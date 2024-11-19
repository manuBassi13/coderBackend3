import { Router } from "express"
import { generatePet, generateUser } from "../utils/utils.js"
import HandleError, { EErrors } from "../handleErrors/handleErrors.js"
import { generateUserErrorInfo, mocksParamsErrorInfo } from "../handleErrors/mocksErrors.js"
import middlewareError from "../middleware/middlewareError.js"
import User from "../dao/user.dao.js"
import Pet from "../dao/pet.dao.js"

const router = Router()

const UserService = new User()
const PetService = new Pet()


router.get('/mockingpets', async (req, res) => {
    const petResult = await PetService.getPets()
    if(petResult.length == 0) return res.status(400).json({message:'No pets found on DB'})

    res.status(200).json({payload: petResult})
})

router.get('/mockingpets/:num', async (req, res) => {
    const { num } = req.params
    let petArray = []
    if(num <= 0 || num > 50){
        HandleError.createError({
            name:'Error en parámetro recibido',
            cause: mocksParamsErrorInfo(num),
            message: 'Número para crear mascotas inválido',
            type: EErrors.INVALID_TYPES,
            code: 400
        })
    } 
    for (let i = 0; i < num; i++){
        let pet = await PetService.createPets(generatePet())
        petArray.push(pet)
    }
    res.status(200).json({payload:petArray})
})

router.get('/mockingusers', async (req, res) => {
    //if(users.length == 0) return res.status(400).json({message:'No users found'})
    const result = await UserService.getUsers()
    if(result.length == 0) return res.status(400).json({message:'No users found on DB'})

    res.status(200).json({payload: result})
})

router.get('/mockingusers/:num', async (req, res) => {
    const { num } = req.params
    let userArray = []
    if(num <= 0 || num > 50) {
        HandleError.createError({
            name:'Error en parámetro recibido',
            cause: mocksParamsErrorInfo(num),
            message: 'Número para crear mascotas inválido',
            type: EErrors.INVALID_TYPES,
            code: 400
        })
    } 
    for (let i = 0; i < num; i++){
        let user = await UserService.createUsers(generateUser())
        userArray.push(user)
    }
    res.status(200).json({payload:userArray})
})

router.post('/generateData/:userCount/:petCount', async (req, res) => {
    const { userCount, petCount } = req.params
    let userArray = []
    let petArray = []
    if((userCount <= 0 || userCount>50) || (petCount <= 0 || petCount>50)){
        HandleError.createError({
            name:'Error en parámetro recibido',
            cause: mocksParamsErrorInfo(userCount, petCount),
            message: 'Número para generar datos inválido',
            type: EErrors.INVALID_TYPES,
            code: 400
        })
    }
    
    for(let i = 0; i < userCount; i++){
        let user = await UserService.createUsers(generateUser())
        userArray.push(user)
    }
    for(let i = 0; i < petCount; i++){
        let pet = await PetService.createPets(generatePet())
        petArray.push(pet)
    }
    res.status(200).json({users_payload: userArray, pets_payload: petArray})
})

router.use(middlewareError)

export default router