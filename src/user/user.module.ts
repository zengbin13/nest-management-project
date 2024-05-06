import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  //导出此模块所需的提供程序的导入模块列表
  imports: [
    // 定义在当前作用域内注册了哪些存储库
    TypeOrmModule.forFeature([User]),
  ],
  // 此模块中定义的必须实例化的控制器集
  controllers: [UserController],
  // 将由 Nest 注入器实例化并且至少可以在该模块中共享的提供程序
  providers: [UserService],
})
export class UserModule {}
