import{modeloReserva}from '../models/reservaModelo.js'

 export class ServicioReserva{
    constructor(){}



    async buscarPorIdReserva(id){
        let reserva=await modeloReserva.findById(id)
        return reserva
    }

    async insertarReserva(reserva){
        let reservaNueva=new modeloReserva(reserva)
        return await reservaNueva.save()
    
    }

    async editarReserva(id,reserva){
        return await modeloReserva.findByIdAndUpdate(id,reserva)
    }

    async eliminarReserva(id){
        return await modeloReserva.findByIdAndDelete(id)
    }


}