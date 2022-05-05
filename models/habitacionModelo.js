//Importar Mooongose 
import mongoose from 'mongoose'
//creae una constante para crear el MODELO DE DATOS
const Schema=mongoose.Schema
// construyo mi modelo o esquema Habitacion
const Habitacion=new Schema({

    nombre:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    }
})
export const modeloHabitacion=mongoose.model('habitaciones',Habitacion)