import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinTable,
  ManyToOne
} from "typeorm"
import { v4 as uuidv4 } from "uuid"
import { Comment } from "./comment.entity"
import { Image } from "./image.entity"
import { User } from "./users.entity"

@Entity("announcement")
export class Announcement {
  @PrimaryColumn("uuid")
  readonly id: string

  @Column({
    length: 20,
  })
  announcementType: string

  @Column({
    length: 150,
  })
  title: string

  @Column({
    type: "integer",
  })
  year: number

  @Column({
    type: "integer",
  })
  km: number

  @Column({
    type: "integer",
  })
  price: number

  @Column({
    unique: true,
    length: 7,
  })
  plate: string

  @Column({
    length: 150,
  })
  description: string

  @Column({
    length: 250,
  })
  vehicleType: string

  @Column()
  published: boolean

  @CreateDateColumn()
  createdAt: Date

  @Column({ default: true })
  isActive: boolean

  @OneToMany(() => Image, (image) => image.announcement, { eager: true })
  images: Image[]

  @ManyToOne(() => User, (user) => user.announcements)
  user: User

  @OneToMany(() => Comment, (comment) => comment.announcement, { eager: true })
 comments: Comment[]

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
