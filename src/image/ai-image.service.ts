import { Injectable } from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AIImage } from './dtos/ai-image.dto';


@Injectable()
export class AIImageService {

    @WebSocketServer()
    server: Server;

     emitAIImage(aiImage: AIImage): void {
        this.server.emit('server2ui2', aiImage);
    }
}
