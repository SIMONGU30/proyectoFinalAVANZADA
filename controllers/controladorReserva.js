 //importamos el servicio

 import {ServicioReserva} from '../services/ServicioReserva.js'
 
 export class ControladorReserva{

    constructor(){}

    async insertar(request,response){
        let servicio=new ServicioReserva()
        let datosPeticion=request.body

        try{
            await servicio.insertarReserva(datosPeticion)

             response.status(200).json({
                mensaje:"exito en el ingreso de reserva",
                datosInsertados:[],
                estado:true
                })
        }
        catch(error){
             response.status(400).json({
                mensaje:"fallo en el ingreso de reserva"+error,
                datosInsertados:[],
                estado:false
                })
        }
    }

    async buscarId(request,response){
        let servicio=new ServicioReserva()
        let id=request.params.id// el id que llega por la url

        try{
            response.status(200).json({
                mensaje:"exito buscando reserva por id",
                datos:await servicio.buscarPorIdReserva(id),
                estado:true
            })
        }
        catch(error){
            response.status(400).json({
                mensaje:"fallamos buscando reserva por id"+error,
                datos:[],
                estado:false
            })
        }
    }

    async editarId(request,response){
        let servicio=new ServicioReserva()
        let id=request.params.id // el id que llega por la url
        let datosPeticion=request.body

        try{
            await servicio.editarReserva(id,datosPeticion)

            response.status(200).json({
                mensaje:"exito editando reserva por id",
                datos:"datos del id"+id,
                estado:true
            })}

        catch(error){
            response.status(400).json({
                mensaje:"fallo editando reserva por id"+error,
                datos:[],
                estado:false
            })
        }
    }

    async  eliminarId(request,response){
        let servicio=new ServicioReserva()
        let id=request.params.id // el id que llega por la url

        try{
            await servicio.eliminarReserva(id)

            response.status(200).json({
            mensaje:"exito eliminando reserva por id",
            datos:"datos del id "+ id,
            estado:true
            })
        }
        catch(error){
            response.status(400).json({
                mensaje:"fallamos eliminando reserva por id"+error,
                datos:"datos del id "+ id,
                estado:false
            })
        }

        
    }
}
