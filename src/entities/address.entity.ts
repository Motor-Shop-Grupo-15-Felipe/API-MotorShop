import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm"
import { User } from "./users.entity"

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  state: string

  @Column()
  city: string

  @Column()
  district: string

  @Column()
  complement: string

  @Column()
  zipCode: string

  @Column()
  number: number

  @OneToMany((type) => User, (user) => user.address)
  user: User[]
}
