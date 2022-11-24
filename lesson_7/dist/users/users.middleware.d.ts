import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class UsersMiddleware implements NestMiddleware {
    private readonly config;
    use(req: Request, res: Response, next: () => void): Response<any, Record<string, any>>;
}
