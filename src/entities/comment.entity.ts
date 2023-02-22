import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from "uuid"
import { Announcement } from "./announcement.entity"
import { User } from "./users.entity"

@Entity("comment")
export class Comment {
  @PrimaryColumn("uuid")
  readonly id: string

  @Column({
    length: 250
  })
  description: string

  @Column()
  tags: string

  @ManyToOne((type) => User, (user) => user.comments, {
    eager: true,
  })
  user: User

  @ManyToOne((type) => Announcement, (announcement) => announcement.comments, {
    eager: true
  })
  announcement: Announcement  

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
