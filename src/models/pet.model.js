import mongoose, { Schema } from "mongoose";

const petCollection = 'pets'

const petSchema = new Schema({
    petName:{
        type: String,
        require: true
    },
    type:{
        type: String,
        require: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        default: null
    },
    birthDate: Date,
    adopted: {
        type: Boolean,
        default: false
    },
    image:{
        //data: Buffer,
        //contentType: String,
        type: String,
        default: null
    }
})

export const PetModel = mongoose.model(petCollection, petSchema)