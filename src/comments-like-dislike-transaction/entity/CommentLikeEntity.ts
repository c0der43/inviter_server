import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CommentEntity } from "../../comment/entity/Comment.entity";
import { UserEntity } from "../../user/entity/user.entity";

@Entity('comments_like_dislike')
export class CommentLikeEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.commentActivity, {
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: UserEntity;

  @ManyToOne(() => CommentEntity, (comment) => comment.likes, {
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
  })
  comment: CommentEntity;
}
