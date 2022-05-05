//Importar Mooongose 
import mongoose from 'mongoose'

export async function conectar(){
    try{

        await mongoose.connect(process.env.DATABASE);
        console.log("Extio conectandonos a base de datos")
    }
    catch(error){

        console.log("Error en al conexion a la BD "+error)

    }
}