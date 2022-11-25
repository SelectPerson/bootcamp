import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {UsersService} from "./users.service";
import {User} from "./user.entity";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {DeleteResult} from "typeorm";
import {UserValueController} from "../../types/ValueContoller";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  async getUsers(): Promise<any> {
    console.log("4444")
    const result = await this.usersService.getUsers();
    return { status: HttpStatus.OK, result };
  }

  @Get('clients')
  async getClients(): Promise<UserValueController<User[]>> {
    const result = await this.usersService.getClients();
    return { status: HttpStatus.OK, result };
  }

  @Get('admins')
  async getAdmins(): Promise<UserValueController<User[]>>  {
    const result = await this.usersService.getAdmins();
    return { status: HttpStatus.OK, result };
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserValueController<User>> {
    const result = await this.usersService.createUser(createUserDto);
    return { status: HttpStatus.OK, result };
  }

  @Get(':id')
  async getByUser(@Param('id') id: string): Promise<UserValueController<User>> {
    const result  = await this.usersService.getByUser(+id);
    return { status: HttpStatus.OK, result };
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UserValueController<User>> {
    const result = await this.usersService.updateUser(+id, updateUserDto);
    return { status: HttpStatus.OK, result };
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string): Promise<UserValueController<DeleteResult>>  {
    const result = await this.usersService.removeUser(+id);
    return { status: HttpStatus.OK, result };
  }
}
