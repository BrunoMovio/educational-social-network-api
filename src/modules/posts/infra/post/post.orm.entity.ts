import { TypeormEntityBase } from "../../../common/database/typeorm.entity.base";
import { Entity, Column, Unique } from "typeorm";
import { PostTags } from "../../domain/posts.entity";

@Entity("post")
@Unique("uq_post_folder", ["userId", , "folderId", "title"])
export class PostOrm extends TypeormEntityBase {
  @Column()
  userId: string;

  @Column()
  folderId: string;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ type: "text" })
  text: string;

  @Column({ type: "jsonb" })
  tags?: PostTags;

  @Column({ type: "int" })
  likes: number;

  @Column({ type: "text" })
  usersLiked: string[];

  @Column({ type: "boolean" })
  verified: boolean;

  @Column({ nullable: true })
  verifiedBy?: string;
}
