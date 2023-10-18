import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../../user/entity/user.entity";

@Entity('token')
export class TokenEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  token: string;

  @JoinColumn()
  @OneToOne(() => UserEntity, (user) => user.token, {
    onDelete: 'CASCADE'
  })
  user: UserEntity;
}
