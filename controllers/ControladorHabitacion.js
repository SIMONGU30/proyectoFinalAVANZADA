// importamos al servicio

import {ServicioHabitacion} from '../services/ServicioHabitacion.js'

// El controlador tiene la logica del negicio (que tengo que hacer)

export class ControladorHabitacion{

    constructor(){}

    async insertar(request,response){ 
        let servicio=new ServicioHabitacion()
        let datosPeticion=request.body
        try{
            await servicio.insertar(datosPeticion)// espero a qu ele servicio guarde los datos
            response.status(200).json({
                mensaje:"exito en el ingreso de datos",
                datosInsertados:[],
                estado:true
            })
        }
        catch(error){
            response.status(400).json({
                mensaje:"fallo en el ingreso de datos"+error,
                datosInsertados:[],
                estado:false
            })
       }

    }


    async buscarTodos(request,response){
        // instancio la clase del servicio
        let servicio=new ServicioHabitacion()
        try{
            
            response.status(200).json({
                mensaje:"exito buscando la informacion",
                datos:await servicio.buscarTodos(),
                estado:true
            })

        }
        catch(error){

            response.status(400).json({
                mensaje:"fallo buscando la informacion "+error,
                datos:[],
                estado:false
            })
        }    
    }


    async buscarporId(request,response){
        let servicio=new ServicioHabitacion()
        let id=request.params.id// el id que llega por la url

        try{
            response.status(200).json({
                mensaje:"exito buscando habitacion por id",
                datos:await servicio.buscarPorId(id),
                estado:true
            })
        }
        catch(error){
            response.status(400).json({
                mensaje:"fallamos buscando habitacion por id"+error,
                datos:[],
                estado:false
            })
        }
       
    }


    async editar(request,response){
        let servicio=new ServicioHabitacion()
        let id=request.params.id // el id que llega por la url
        let datosPeticion=request.body

        try{
            await servicio.editar(id,datosPeticion)

            response.status(200).json({
                mensaje:"exito editando habitacion por id",
                datos:"datos del id"+id,
                estado:true
            })}

        catch(error){
            response.status(400).json({
                mensaje:"fallo editando habitacion por id"+error,
                datos:[],
                estado:false
            })
        }

    }
  


    async eliminar(request,response){
        let servicio=new ServicioHabitacion()
        let id=request.params.id // el id que llega por la url

        try{
            await servicio.eliminar(id)

            response.status(200).json({
            mensaje:"exito eliminando habitacion por id",
            datos:"datos del id "+ id,
            estado:true
            })
        }
        catch(error){
            response.status(400).json({
                mensaje:"fallamos eliminando habitacion por id"+error,
                datos:"datos del id "+ id,
                estado:false
            })
        }

        
    }

}
