import { TypeormEntityBase } from "../../common/database/typeorm.entity.base";
import { Entity, Column, Unique } from "typeorm";

@Entity("folder")
@Unique("uq_folder_title", ["userId", "title"])
export class FolderOrm extends TypeormEntityBase {
  @Column()
  userId: string;

  @Column()
  title: string;

  @Column()
  description: string;
}
