//importo el paquete Express
//const express = require('express')
import express from'express'

//importrar las rutas del API
import{rutas} from '../routes/rutas.js'

//importar la conexion con base de datos
import{conectar}from '../database/conexion.js'

import cors from 'cors'

   export class Servidor{
    constructor(){

        // atributo que se llama app dpnde almaceno la funcionalidad

        this.app = express()
        this.conectarconBd()
        this.llamarAuxiliares()
        this.atenderServicios()
    }
    // metodos
    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`servidor encendido en  ${process.env.PORT}`)
       })    
    }

    atenderServicios(){

        this.app.use('/',rutas)   

    }

    conectarconBd(){
        conectar()
    }

    llamarAuxiliares(){
        // ACTIVO LA RECEPCION DE DATOS POR EL BODY DE LA PETICION

        this.app.use(express.json())
        this.app.use(cors())
    }


}