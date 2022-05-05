// importando el paquete dotenv
//require('dotenv').config()
import 'dotenv/config'

// importo la clase servidor
import {Servidor} from './Server/Servidor.js'

// creo un objeto de la clase servidor 
// los objetos variables 

let servidor=new Servidor()

//Llamo al metodo encender 

servidor.encenderServidor()






