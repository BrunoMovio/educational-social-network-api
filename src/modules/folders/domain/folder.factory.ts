import { Injectable } from "@nestjs/common";
import { ID } from "../../../modules/common/domain/value-objects/id";
import { FolderOrmRepository } from "../infra/folder.orm.repository";

import { Folder } from "./folder.entity";

interface CreateFolderInput {
  userId: string;
  title: string;
  description: string;
}

@Injectable()
export class FolderFactory {
  constructor() {}

  async create(input: CreateFolderInput) {
    const folder = new Folder({
      ...input,
      userId: new ID(input.userId),
    });

    return folder;
  }
}
