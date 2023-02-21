import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToOne } from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuidv4 } from "uuid";

@Entity("user")

export class User{
    @PrimaryColumn("uuid")
    readonly id : string ;
    
    @Column()
    name: string;

    @Column({unique:true})
    email: string 

    @Column()
    phone: string

    @Column({unique:true,length:11})
    cpf: string

    @Column()
    date_of_birth: string

    @Column()
    description: string

    @Column({type: "boolean"})
    isBuyer: boolean;
    
    @Column({type: "boolean"})
    isAdvertiser:boolean;

    //@Column()
    //type_of_user_account: string

    @Column()
    @Exclude()
    password:string 

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date

    //@OneToOne(() => Addresses  (address) => addresses.user, { eager: true })

    constructor() {
        if (!this.id) {
          this.id = uuidv4();
        }
      }


}