import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SocketAuthenticationAdapter } from './socket/authentication.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Makes sense to use when serving from the same domain as
   * the client (and even in general)
   */
  // app.setGlobalPrefix('/api/v1')

  app.useWebSocketAdapter(new SocketAuthenticationAdapter(app));

  console.log(`Listening on: ${process.env.PORT || 8888}`);

  await app.listen(process.env.PORT || 8888);
}
bootstrap();
