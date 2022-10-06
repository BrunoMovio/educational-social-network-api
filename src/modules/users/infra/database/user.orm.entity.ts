import { TypeormEntityBase } from "../../../common/database/typeorm.entity.base";
import { Entity, Column, OneToMany } from "typeorm";
import { PostOrm } from "src/modules/posts/infra/database/post.orm.entity";

@Entity("user")
export class UserOrm extends TypeormEntityBase {
  @Column()
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "date" })
  birthday?: string;

  @Column()
  avatar: string;
}
