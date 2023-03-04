import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  // Arreglo para guardar los mensajes
  mensajes: object[] = [];

  // Constructor para obtener el servicio de sockets
  constructor(private socket: SocketService) {
    // Escuchamos por nuevos mensajes
    this.onRecibirMensaje();
  }

  // Método para enviar un mensaje
  enviarMensaje(infoMensaje: object) {
    // Agregamos el mensaje a nuestra lista de mensajes
    this.mensajes.push(infoMensaje);
    // Enviamos el mensaje utilizando el servicio de sockets
    this.socket.io.emit('enviarMensaje', infoMensaje);
  }

  // Método para recibir un mensaje
  onRecibirMensaje() {
    return new Promise((resolve) => {
      this.socket.io.on('recibirMensaje', (infoMensaje: object) => {
        // Agregamos el mensaje a nuestra lista de mensajes
        this.mensajes.push(infoMensaje);
        resolve(infoMensaje);
      });
    });
  }
}
