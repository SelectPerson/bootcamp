import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from './user.entity';
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(User)
      private readonly usersRepository: Repository<User>
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.save({ ...createUserDto });
  }

  async getClients() {
    return await this.usersRepository.find({where: {type: 'client'}});
  }

  async getAdmins() {
    console.log("123")
    return await this.usersRepository.find({ where: { type: 'test' }});
  }

  async getUsers() {
    await this.usersRepository.find()
      .then(res => {
      return res;
    }).catch(e => e);
  }

  async getByUser(id) {
    return await this.usersRepository.findOneBy({ id: id });
  }

  async updateUser(id, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({ where: { id } });
    return await this.usersRepository.save({ ...updateUserDto });
  }

  async removeUser(id) {
    return await this.usersRepository.delete(id);
  }
}
