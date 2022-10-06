import { TypeormEntityBase } from "../../../common/database/typeorm.entity.base";
import { Entity, Column, Unique } from "typeorm";
import { PostTags } from "../../domain/posts.entity";

@Entity("post")
@Unique("uq_post", ["userId", "name"])
export class PostOrm extends TypeormEntityBase {
  @Column()
  userId: string;

  @Column()
  name: string;

  @Column({ type: "text" })
  markdown: string;

  @Column({ type: "jsonb" })
  tags?: PostTags;

  @Column({ type: "int" })
  likes: number;
}
