import { Repository } from "typeorm";
import { AppDataSource } from "../database/dataSource";
import { User } from "../database/entities/User";

export class userRepository {
  private repo: Repository<User>;
  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  async create(user: User) {
    const newUser = await this.repo.create(user);
    await this.repo.save(newUser);

    return newUser;
  }

  async delete(user: User) {
    await this.repo.delete(user.id);
  }

  async update(id: string, user: User) {
    this.repo
      .createQueryBuilder()
      .update(User)
      .set({
        email: user.email,
        password: user.password,
        phone: user.phone,
        username: user.username,
        photo: user.photo,
      })
      .where({ id })
      .execute();
  }

  async getOne(id: string) {
    const item = await this.repo.findOneBy({ id });

    return item;
  }

  async getOneByUser(username: string){
    const result = await this.repo.findOne({where: {username}})

    return result
  }
}
