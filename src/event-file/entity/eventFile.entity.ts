import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EventEntity } from "../../event/entity/Event.entity";

@Entity('file_entity')
export class EventFileEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  mimeType: string;

  @Column()
  size: number;

  @JoinColumn()
  @OneToOne(() => EventEntity, (event) => event.previewFile, {
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
  })
  event: EventEntity;

}
