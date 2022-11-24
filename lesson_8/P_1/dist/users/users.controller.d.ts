import { HttpStatus } from '@nestjs/common';
import { UsersService } from "./users.service";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { DeleteResult } from "typeorm";
interface UserValueController<T> {
    result?: T;
    error?: string;
    status: HttpStatus;
}
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<UserValueController<User[]>>;
    getClients(): Promise<any>;
    getAdmins(): Promise<UserValueController<User[]>>;
    create(createUserDto: CreateUserDto): Promise<UserValueController<User>>;
    getByUser(id: string): Promise<UserValueController<User>>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UserValueController<User>>;
    removeUser(id: string): Promise<UserValueController<DeleteResult>>;
}
export {};
