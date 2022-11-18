import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any, loginAuthDto: LoginAuthDto): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
