import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  // Variable para guardar el texto del mensaje
  texto: string = '';
  // Arreglo para guardar los mensajes
  mensajes: any[] = [];

  ultimaVezEnLinea = 'Hace 5 minutos'

  // Constructor para obtener el servicio de chat
  constructor(private servicioChat: ChatService) {
    // Inicializamos los mensajes con los que ya existen en el servicio
    this.mensajes = this.servicioChat.mensajes;
  }

  // Método para enviar un mensaje
  enviarMensaje() {
    // Agregamos el mensaje a nuestra lista de mensajes
    this.mensajes = this.servicioChat.mensajes;
    let infoMensaje = {
      texto: this.texto,
      fecha: new Date().getHours() + ':' + new Date().getMinutes(),
      tipoMensaje: 1,
    };
    // Enviamos el mensaje utilizando el servicio de chat
    this.servicioChat.enviarMensaje(infoMensaje);
    // Limpiamos el campo de texto
    this.texto = '';
  }
}
