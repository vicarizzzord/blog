import { User } from "../database/entities/User";
import { userRepository } from "../repositories/user.repository";

export class userService {
    private repo
    constructor(){
        this.repo = new userRepository ()
    }
  async create(user: User) {

    const newUser = await this.repo.create(user);

    return newUser;
  }

  async delete(user: User) {

    await this.repo.delete(user);
  }

  async update(id: string, user: User) {

    const item = await this.repo.getOne(id);

    await this.repo.update(id, user);

    return { id, user };
  }

  async getOne(id: string){
    
    const item = await this.repo.getOne(id)

    return item
  }

  async getOneByUser(username: string){
    
    const item = await this.repo.getOne(username)

    return item
  }


}
