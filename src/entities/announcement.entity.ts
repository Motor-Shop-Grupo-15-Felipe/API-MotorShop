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
    length: 150,
  })
  name: string

  @Column({
    length: 150,
  })
  description: string

  @Column()
  owner_name: string

  @Column({
    length: 150,
  })
  km: number

  @Column({
    length: 150,
  })
  year: number

  @Column({
    length: 150,
  })
  price: number

  @Column({ default: true })
  isActive: boolean

  @CreateDateColumn()
  createdAt: Date

  //   @OneToMany((type) => User, (user) => {
  //     eager: true,
  //   })
  //   @JoinTable()
  //   users: User[]

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
