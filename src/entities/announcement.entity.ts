import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinTable,
} from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("announcement")
export class Announcement {

  @PrimaryColumn("uuid")
  readonly id: string

  @Column({
    length: 20
  })
  announcementType: string  

  @Column({
    length: 150,
  })
  title: string

  @Column({
    type: "integer"
  })
  year: number

  @Column({
    type: "integer"
  })
  km: number

  @Column({
    type: "integer"
  })
  price: number
  
  @Column({
    length: 150,
  })
  description: string

  @Column({
    length: 250
  })
  vehicleType: string

  @Column({
    type: "boolean"
  })
  published: boolean
  
  @CreateDateColumn()
  createdAt: Date

  @Column({ default: true })
  isActive: boolean


  // @OneToMany(() => Image, (image) => image.announcement, { eager: true })
  // images: Image[]

  // @ManyToOne(() => User, (user) => user.announcements)
  // user: User

  // @OneToMany(() => Review, (review) => review.announcement, { eager: true })
  // review: Review[]

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}