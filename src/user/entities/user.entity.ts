import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    length: 30,
    comment: '用户名称',
  })
  username: string;

  @Column({
    comment: '用户密码',
  })
  password: string;
}
