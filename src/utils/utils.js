import { faker } from "@faker-js/faker";
import bcrypt from 'bcrypt'

export const createHash = (pass) => bcrypt.hashSync(pass, bcrypt.genSaltSync(10))

export const generatePet = () => {
    return{
        id: faker.database.mongodbObjectId(),
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
        id: faker.database.mongodbObjectId(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        birthDate: faker.date.birthdate(),
        email: faker.internet.email(),
        password: createHash('coder123'),
        role: Math.random() < 0.5 ? 'user' : 'admin',
        pets: []
    }
}
