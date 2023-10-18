import { CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EventEntity } from "../../event/entity/Event.entity";
import { UserEntity } from "../../user/entity/user.entity";

@Entity('join_event_transaction')
export class EventTransactionEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => EventEntity, (event) => event.users, {
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
  })
  event: EventEntity;

  @ManyToOne(() => UserEntity, (user) => user.eventTransactions, {
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
  })
  user: UserEntity;

  @CreateDateColumn()
  create_at: string;
}
