import { PetModel } from "../models/pet.model.js";

export default class Pet {

    getPets = async () => {
        try{
            return await PetModel.find().lean()
        } catch (e){
            console.log(e);
            return null
        }
    }

    getPetById = async (id) => {
        try{
            return await PetModel.findOne({_id: id}).lean()
        } catch (e){
            console.log(e);
            return null
        }
    }

    getPetByType = async (type) => {
        try{
            console.log(type);
            
            return await PetModel.findOne({type: type}).lean()
        } catch (e){
            console.log(e);
            return null
        }
    }

    createPets = async (pet) => {
        try{
            return await PetModel.create(pet)
        } catch (e){
            console.log(e);
            return null
        }
    }

}