import express from 'express'

// importo el controlador 

import {ControladorHabitacion}  from '../controllers/ControladorHabitacion.js'

// importo contraldor reservas

import {ControladorReserva} from'../controllers/controladorReserva.js'

 export let rutas=express.Router()

 //creo un objeto de la clase controlador habitaciones

 let controladorHabitacion=new ControladorHabitacion()

  //creo un objeto de la clase controlador reservas

  let controladorReservas=new ControladorReserva()

//defino las rutas 

// ***************** RUTAS PARA LOS SREVICIOS DE HABITACIONES *********************************

  rutas.post('/api/v1/habitaciones/',controladorHabitacion.insertar)//1.Servicio agregsr habitacion
  rutas.get('/api/v1/habitaciones/', controladorHabitacion.buscarTodos) //2.Servicio para buscar  todas las habitaciones
  rutas.get('/api/v1/habitaciones/:id/', controladorHabitacion.buscarporId)//3.Servicio para buscar por id las habitaciones
  rutas.put('/api/v1/habitaciones/:id/',controladorHabitacion.editar) //4. Servicio para Cambiar la habitacion
  rutas.delete('/api/v1/habitaciones/:id/',controladorHabitacion.eliminar)  //5. Servicio para eliminar la  habitacion


//****************** RUTAS PARA LOS SERVICIOS DE RESERVA*******************************


  rutas.post('/api/v1/reservas/', controladorReservas.insertar)//1.Servicio agregsr Reserva
  rutas.get('/api/v1/reservas/:id/', controladorReservas.buscarId)//2.Servicio para buscar  reservas por ID
  rutas.put('/api/v1/reservas/:id/', controladorReservas.editarId) //3.Servicio para editar reservaP por ID
  rutas.delete('/api/v1/reservas/:id/', controladorReservas.eliminarId) //4. Servicio para Cambiar la habitacion

