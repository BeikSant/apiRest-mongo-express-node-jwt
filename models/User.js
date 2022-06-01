import {Schema, model} from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true, 
        unique: true,
        trim: true, //Limpia espacios a la izquierda y a la derecha
        index: {unique: true},
    },
    password: {
        type: String,
        required: true,
        
    }
});

export const User = model('user', userSchema);