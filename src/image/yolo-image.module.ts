import { Module } from '@nestjs/common';
import { YOLOImageController } from './yolo-image.controller';
import { YOLOImageService } from './yolo-image.service';

@Module({
  imports: [],
  controllers: [YOLOImageController],
  providers: [YOLOImageService],
})
export class AIImageModule {}
