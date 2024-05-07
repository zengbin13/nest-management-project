import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filter/http-exception/http-exception.filter';
import { TransformInterceptor } from './common/interceptor/transform/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 将异常过滤器注册为全局过滤器（将在 每个 HTTP 路由处理程序）
  app.useGlobalFilters(new HttpExceptionFilter());
  // 将拦截器注册为全局拦截器（将在 每个 HTTP 路由处理程序）
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
}
bootstrap();
