import mongoose from "mongoose"
const Schema=mongoose.Schema
const Resrva=new Schema({
    fechaIngreso:{
        type:Date,
        required:true
    },
    fechaSalida:{
        type:Date,
        required:true 
    },
    nombreCliente:{
        type:String,
        required:true
    },
    cedulaCliente:{
        type:String,
        required:true
    },
    costoTotal:{
        type:Number,
        required:true
    }
})

export const modeloReserva=mongoose.model('reservas',Resrva)