import { Injectable } from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { YOLOImage } from './dtos/yolo-image.dto';


@Injectable()
export class YOLOImageService {

    @WebSocketServer()
    server: Server;

     emitYOLOImage(yoloImage: YOLOImage): void {
        this.server.emit('server2ui2', yoloImage);
    }
}
