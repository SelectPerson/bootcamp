import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getClients(): Promise<User[]>;
    getAdmins(): Promise<User[]>;
    getUsers(): Promise<User[]>;
    getByUser(id: any): Promise<User>;
    updateUser(id: any, updateUserDto: UpdateUserDto): Promise<{
        firstName: string;
        lastName: string;
        isActive: boolean;
        type: string;
        id: number;
    } & User>;
    removeUser(id: any): Promise<import("typeorm").DeleteResult>;
}
