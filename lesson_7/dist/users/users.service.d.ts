import { UserRepository } from './database/user';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getClients(): Promise<any>;
    getAdmins(): Promise<any>;
}
