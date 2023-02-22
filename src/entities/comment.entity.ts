import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"
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

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
