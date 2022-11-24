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
    return await this.usersRepository.find({ where: { type: 'admin' }});
  }

  async getUsers() {
    return await this.usersRepository.find();
  }

  async getByUser(id) {
    return await this.usersRepository.findOneBy({ id: id });
  }

  async updateUser(id, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({ where: { id } });
    return await this.usersRepository.save({ ...user, ...updateUserDto });
  }

  async removeUser(id) {
    return await this.usersRepository.delete(id);
  }
}
