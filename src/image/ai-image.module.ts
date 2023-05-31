import { Module } from '@nestjs/common';
import { AIImageController } from './ai-image.controller';
import { AIImageService } from './ai-image.service';

@Module({
  imports: [],
  controllers: [AIImageController],
  providers: [AIImageService],
})
export class AIImageModule {}
