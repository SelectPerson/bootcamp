import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
export declare class AuthService {
    private usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser({ email, password }: LoginAuthDto): Promise<any>;
    login(loginAuthDto: LoginAuthDto): Promise<{
        access_token: string;
    }>;
}
