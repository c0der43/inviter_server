import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TokenEntity } from "../../token/entity/token.entity";
import { EventEntity } from "../../event/entity/Event.entity";
import { EventTransactionEntity } from "../../join-event-transaction/entity/EventTransactionEntity";
import { CommentEntity } from "../../comment/entity/Comment.entity";
import { CommentLikeEntity } from "../../comments-like-dislike-transaction/entity/CommentLikeEntity";
import { ProfileAvatarEntity } from "../../profile-avatar/entity/ProfileAvatar.entity";
import { EUserRole, UserRole } from "../types/UserRole";

@Entity('user')
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  email: string;

  @Column({nullable: false})
  password: string;

  @Column({nullable: false})
  firstName: string;

  @Column({nullable: false})
  lastName: string;

  @Column({default: EUserRole.USER})
  role: UserRole;

  @OneToOne(() => ProfileAvatarEntity, (avatar) => avatar.user, {
    cascade: true
  })
  avatar: ProfileAvatarEntity;

  @OneToMany(() => EventEntity, (events) => events.creator, {
    cascade: true
  })
  createdEvents: EventEntity;

  @OneToOne(() => TokenEntity, (token) => token.user, {
    cascade: true
  })
  token: TokenEntity;

  @OneToMany(() => EventEntity, (event) => event.invitedCurators, {
    cascade: true
})
  invitedAsCurator: EventEntity[];

  @OneToMany(() => EventTransactionEntity, (event) => event.user, {
    cascade: true
  })
  eventTransactions: EventTransactionEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.user, {
    cascade: true
  })
  comments: CommentEntity[];

  @OneToMany(() => CommentLikeEntity, (activity) => activity.user, {
    cascade: true
  })
  commentActivity: CommentLikeEntity[];
}
