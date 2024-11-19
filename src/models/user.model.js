import mongoose, { Schema } from "mongoose";

const userCollection = 'users'

const userSchema = new Schema({
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    birthDate: Date,
    password: String,
    role: {
        type: String,
        default: 'user',
        require: true
    },
    pets: {
        default: [],
        type: [{
            pet: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'pets'
            }
        }]
    }
})

export const UserModel = mongoose.model(userCollection, userSchema)