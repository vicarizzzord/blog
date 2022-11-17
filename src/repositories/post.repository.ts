import { Repository } from "typeorm";
import { AppDataSource } from "../database/dataSource";
import { Post } from "../database/entities/Post";

export class postRepository {
  private repo: Repository<Post>;
  constructor() {
    this.repo = AppDataSource.getRepository(Post);
  }

  async create(post: Post) {
    const newPost = this.repo.create(post);
    await this.repo.save(newPost);
  }

  async delete(post: Post) {
    await this.repo.delete(post.id);
  }

  async update(id: string, post: Post) {
    this.repo
      .createQueryBuilder()
      .update(Post)
      .set({
        content: post.content,
      })
      .where(id)
      .execute();
  }
}
