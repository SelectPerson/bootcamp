import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getClients(): Promise<{
        status: boolean;
        result: [];
    }>;
    getAdmins(): Promise<{
        status: boolean;
        result: [];
    }>;
}
