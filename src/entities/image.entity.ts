import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { v4 as uuidv4 } from "uuid"

import { Announcement } from "./announcement.entity"

@Entity("image")
export class Image {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({
    length: 255
  })
  imageUrl: string

  @Column({
    length: 20
  })
  type: string

  @ManyToOne(() => Announcement, (announcement) => announcement.images)
  announcement: Announcement

  constructor() {
    if (!this.id) {
        this.id = uuidv4();
    }
}
}
