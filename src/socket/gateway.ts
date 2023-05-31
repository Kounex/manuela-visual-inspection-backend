import { ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({ cors: { origin: [process.env.UI_URL], }})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {

  handleConnection(@ConnectedSocket() client: any) {
    console.log(
      `user ${client.user.id} with socket ${client.id} connected with device ${client.handshake?.query?.deviceId}`,
    );

  }

  handleDisconnect(@ConnectedSocket() client: any) {
    console.log(
      `user ${client.user.id} with socket ${client.id} with device ${client.handshake?.query?.deviceId} DISCONNECTED`,
    );
  }
}