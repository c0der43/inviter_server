import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { EventEntity } from "../../event/entity/Event.entity";

@Entity('tag')
export class TagEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  name: string;

  @ManyToMany(() => EventEntity, (event) => event.tags, {
    cascade: true
  })
  @JoinTable()
  events: EventEntity[];
}
