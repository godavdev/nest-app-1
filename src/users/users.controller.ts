import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from './dto/user.dtos';
import { UsersService } from './users.service';

// url/users
// http://localhost:3000/users
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // http://localhost:3000/users GET
  @Get()
  async getUsers() {
    return await this.usersService.getUsers();
  }

  //   http://localhost:3000/users/1 GET
  @Get(':id')
  async getUserById(@Param() params: { id: string }) {
    const foundUser = await this.usersService.getUserById(Number(params.id));
    if (!foundUser) {
      throw new NotFoundException();
    }
    return foundUser;
  }

  //   http://localhost:3000/users POST
  @Post()
  async createUser(@Body() body: UserDto) {
    return await this.usersService.createUser(body);
  }

  @Put(':id')
  async replaceUser(@Param() params: { id: string }, @Body() body: UserDto) {
    const updatedUser = await this.usersService.updateUser(
      Number(params.id),
      body,
    );
    if (!updatedUser) {
      throw new NotFoundException();
    }
    return updatedUser;
  }

  @Delete(':id')
  async deleteUser(@Param() params: { id: string }) {
    const deleted = await this.usersService.deleteUser(Number(params.id));
    if (!deleted) {
      throw new NotFoundException();
    }
    return { message: 'User deleted successfully' };
  }
}
