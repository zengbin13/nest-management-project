import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型
      host: 'localhost', // 数据库主机
      port: 3306, // 数据库端口
      username: 'root', // 数据库用户名
      password: '123456', // 数据库密码
      database: 'nest_admin', // 数据库名
      // entities: [__dirname + '/**/*.entity{.ts,.js}'], // 实体文件的路径
      autoLoadEntities: true, //自动加载实体
      synchronize: true, // 是否在每次应用启动时自动创建数据库表结构
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
