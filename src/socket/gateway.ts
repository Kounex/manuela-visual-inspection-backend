import { ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ cors: { origin: [process.env.UI_URL], }})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server;

  handleConnection(@ConnectedSocket() client: Socket) {
    console.log(
      `Socket client ID ${client.id} CONNECTED via socket`,
    );

  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log(
      `Socket client ID ${client.id} DISCONNECTED via socket`,
    );
  }
}