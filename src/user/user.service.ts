import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

// 使用 @Injectable() 装饰器将其标记为可注入的服务类
@Injectable()
export class UserService {
  constructor(
    // 通过 @InjectRepository() 装饰器将 User 实体注入到了 userRepository 成员变量中
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    if (!createUserDto.username) {
      throw new HttpException('创建用户需包含名称', HttpStatus.BAD_REQUEST);
    }
    try {
      return await this.userRepository.save(createUserDto);
    } catch (error) {
      throw new HttpException('系统错误', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    // throw new HttpException('禁止访问', HttpStatus.FORBIDDEN);
    return await this.userRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
