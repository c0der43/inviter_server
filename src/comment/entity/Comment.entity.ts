import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../../user/entity/user.entity";
import { CommentLikeEntity } from "../../comments-like-dislike-transaction/entity/CommentLikeEntity";
import { EventEntity } from "../../event/entity/Event.entity";

@Entity('comment')
export class CommentEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  text: string;

  @ManyToOne(() => UserEntity, (user) => user.comments,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: UserEntity;

  @ManyToOne(() => EventEntity, (event) => event.comments, {
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
  })
  event: EventEntity;

  @Column({default: 0})
  likesCount: number;

  @ManyToOne(() => CommentLikeEntity, (activity) => activity.comment, {
    cascade: true
  })
  likes: CommentLikeEntity[]

  @CreateDateColumn()
  create_at: string;
}
