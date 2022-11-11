import { TypeormEntityBase } from "../../../../common/database/typeorm.entity.base";
import { Entity, Column, Unique } from "typeorm";

@Entity("folder")
@Unique("uq_folder", ["userId", "name"])
export class FolderOrm extends TypeormEntityBase {
  @Column()
  userId: string;

  @Column()
  name: string;
}
