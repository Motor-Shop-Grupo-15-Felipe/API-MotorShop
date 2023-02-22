import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm"
import { Comment } from "./comment.entity"
import { Address } from "./address.entity"
import { Exclude } from "class-transformer"
import { v4 as uuidv4 } from "uuid"
import { Announcement } from "./announcement.entity"

@Entity("user")
export class User {
  @PrimaryColumn("uuid")
  readonly id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  phone: string

  @Column({ unique: true, length: 11 })
  cpf: string

  @Column()
  date_of_birth: Date

  @Column()
  description: string

  @Column()
  isBuyer: boolean

  @Column()
  isAdvertiser: boolean

  @Column()
  @Exclude()
  password: string

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date

  @ManyToOne((type) => Address, (address) => address.user, {
    eager: true,
  })
  @JoinColumn()
  address: Address

  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[]

  @ManyToOne((type) => Announcement, (announcement) => announcement.user, {
    eager: true
  })
  announcements: Announcement[]  

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}
