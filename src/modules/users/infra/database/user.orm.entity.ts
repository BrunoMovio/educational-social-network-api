import { TypeormEntityBase } from "../../../common/database/typeorm.entity.base";
import { Entity, Column } from "typeorm";

@Entity("user")
export class UserOrm extends TypeormEntityBase {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  nickname: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column()
  role: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  career: string;
}
