import {
  Column,
  CreateDateColumn,
  Entity, JoinTable, ManyToMany,
  ManyToOne, OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { UserEntity } from "../../user/entity/user.entity";
import { EventFileEntity } from "../../event-file/entity/eventFile.entity";
import { TagEntity } from "../../tag/entity/tag.entity";
import { EventTransactionEntity } from "../../join-event-transaction/entity/EventTransactionEntity";
import { CommentEntity } from "../../comment/entity/Comment.entity";

@Entity('event')
export class EventEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  desc: string;

  @Column({type: 'date'})
  date: string;

  @Column({type: 'time'})
  time: string;

  @Column({type: 'time'})
  duration: string;

  @Column()
  locationName: string;

  @Column({type: 'double precision'})
  locationLat: string;

  @Column({type: 'double precision'})
  locationLng: string;

  @Column({default: 10})
  maxMember: number;

  @ManyToOne(() => UserEntity, (user) => user.createdEvents, {
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
  })
  creator: UserEntity;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => EventFileEntity, (file) => file.event, {
    cascade: true
  })
  previewFile: EventFileEntity;

  @ManyToMany(() => UserEntity, (user) => user.invitedAsCurator, {
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
  } )
  @JoinTable()
  invitedCurators: UserEntity[];

  @OneToMany(() => EventTransactionEntity, (transaction) => transaction.event, {
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
  })
  users: EventTransactionEntity[];

  @ManyToMany(() => TagEntity, (tag) => tag.events, {
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
  })
  tags: TagEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.event, {
    cascade: true
  })
  comments: CommentEntity[];
}
