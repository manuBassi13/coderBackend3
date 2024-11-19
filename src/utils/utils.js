import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { faker } from "@faker-js/faker";
import bcrypt from 'bcrypt'

export const createHash = (pass) => bcrypt.hashSync(pass, bcrypt.genSaltSync(10))

const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)

export const generatePet = () => {
    return{
        petName: faker.animal.petName(),
        type: faker.animal.dog(),
        birthDate: faker.date.birthdate({mode: 'age', min:0, max: 20}),
        owner: null,
        adopted: false,
        image: null
    }
}

export const generateUser = () => {
    return{
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        birthDate: faker.date.birthdate(),
        email: faker.internet.email(),
        password: createHash('coder123'),
        role: Math.random() < 0.5 ? 'user' : 'admin',
        pets: []
    }
}
