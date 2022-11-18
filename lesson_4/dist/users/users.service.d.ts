import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: typeof User);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: any): Promise<User>;
    update(id: any, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: any): Promise<void>;
    findByEmail(email: any): Promise<User>;
}
