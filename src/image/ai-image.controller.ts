import { Body, Controller, Header, Post } from '@nestjs/common';
import { AIImageService } from './ai-image.service';
import { AIImage } from './dtos/ai-image.dto';

@Controller()
export class AIImageController {

    constructor(private aiImageService: AIImageService) { }

    @Post('/')
    @Header('Cache-Control', 'none')
    @Header('Ce-Id', 'UUID')
    @Header('Ce-specversion', '1.0')
    @Header('Ce-Source', 'manuela/eventing/image-processor')
    @Header('Ce-Type', 'manuela.image-processor.response')
    public receiveAIImage(@Body() aiImage: AIImage) {
        this.aiImageService.emitAIImage(aiImage);

        return {msg: 'Image sent to dashoard'};
    }
}
