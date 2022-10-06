import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './application/post.service';
import { CreatePostService } from './application/create-post.service';
import { RemovePostService } from './application/remove-post.service';
import { UpdatePostService } from './application/update-post.service';
import { PostFactory } from './domain/posts.factory';
import { PostOrm } from './infra/database/post.orm.entity';
import { PostOrmMapper } from './infra/database/post.orm.mapper';
import { PostOrmRepository } from './infra/database/post.orm.repository';
import { PostController } from './presentation/post.controler';

@Module({
  imports: [TypeOrmModule.forFeature([PostOrm])],
  providers: [
    PostOrmRepository,
    PostFactory,
    PostService,
    CreatePostService,
    UpdatePostService,
    RemovePostService,
    PostOrmMapper,
  ],
  controllers: [PostController],
  exports: [PostService],
})
export class PostModule {}
