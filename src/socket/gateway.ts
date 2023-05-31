import { ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: [process.env.UI_URL], }})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {

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