import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../../user/entity/user.entity";

@Entity('profile_avatar')
export class ProfileAvatarEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  mimeType: string;

  @Column()
  size: number;

  @JoinColumn()
  @OneToOne(() => UserEntity, (user) => user.avatar, {
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: UserEntity;
}
