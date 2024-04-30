import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController], // 此模块中定义的必须实例化的控制器集
  providers: [UserService], // 将由 Nest 注入器实例化并且至少可以在该模块中共享的提供程序
})
export class UserModule {}
