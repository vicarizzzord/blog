import { Repository } from "typeorm";
import { Post } from "../database/entities/Post";
import { postRepository } from "../repositories/post.repository";

export class postService {
  private repo;
  constructor() {
    this.repo = new postRepository();
  }

  async create(post: Post) {
    const newPost = await this.repo.create(post);

    return newPost;
  }

  async delete(post: Post) {
    await this.repo.delete(post);
  }

  async update(id: string, post:Post){
    const item = await this.repo.update(id, post);
  }
}
