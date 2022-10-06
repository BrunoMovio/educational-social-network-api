import { Injectable } from "@nestjs/common";
import { ID } from "../../../modules/common/domain/value-objects/id";
import { PostOrmRepository } from "../infra/database/post.orm.repository";

@Injectable()
export class RemovePostService {
  constructor(private readonly postReporsitory: PostOrmRepository) {}

  async remove(id: string): Promise<string> {
    const post = await this.postReporsitory.findOneByIdOrThrow(new ID(id));

    await this.postReporsitory.delete(post);
    return "Post deletado";
  }
}
