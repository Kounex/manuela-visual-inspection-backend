import { Module } from '@nestjs/common';
import { AIImageModule } from './image/yolo-image.module';
import { SocketModule } from './socket/module';

@Module({
  imports: [SocketModule, AIImageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
