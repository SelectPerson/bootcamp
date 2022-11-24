import { Controller, Get } from '@nestjs/common';
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get('clients')
  async getClients(): Promise<{ status: boolean, result: [] }> {
    const result = await this.usersService.getClients();
    return { status: true, result };
  }

  @Get('admins')
  async getAdmins(): Promise<{ status: boolean, result: [] }> {
    const result = await this.usersService.getAdmins();
    return { status: true, result };
  }
}
